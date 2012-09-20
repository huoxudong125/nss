package com.feinno.nss.framework.controller.action.outlink;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.action.CommonAction;
import com.feinno.nss.model.beans.OutLink;

public class OutLinkAction extends CommonAction
{
	private static final long serialVersionUID = 1L;
	private static final Log logger = LogFactory.getLog(OutLinkAction.class);
	private int result;
	private OutLink outLink;
	private List<OutLink> outLinkList;

	public int getResult()
	{
		return result;
	}

	public void setResult(int result)
	{
		this.result = result;
	}

	public OutLink getOutLink()
	{
		return outLink;
	}

	public void setOutLink(OutLink outLink)
	{
		this.outLink = outLink;
	}

	public List<OutLink> getOutLinkList()
	{
		return this.outLinkList;
	}

	public void setOutLinkList(List<OutLink> outLinkList)
	{
		this.outLinkList = outLinkList;
	}

	private Timestamp getEndDate()
	{
		Date date = new Date();
		if (getRequest().getParameter("outLinkEndDate") != null && getRequest().getParameter("outLinkEndDate").length() > 0)
		{
			DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String endDateString = getRequest().getParameter("outLinkEndDate");
			try
			{
				date = sdf.parse(endDateString);
			}
			catch (Exception e)
			{
				logger.error("[%getEndDate error:" + e + "%]");
			}
		}

		return new Timestamp(date.getTime());
	}

	public String list()
	{
		int userId = 1;
		String hql = "from OutLink t where UserID=? order by t.id desc";
		String countHql = "select count(*) from OutLink t where UserID = ?";
		Object[] params = new Object[1];
		params[0] = userId;

		int recordCount = (int) Factory.getOutLinkService().getCount(countHql, params);
		super.setPageAttribute(recordCount, super.defaultPageSize);

		outLinkList = Factory.getOutLinkService().getPageList(hql, params, super.getPageIndex(), super.defaultPageSize);

		return "list";
	}

	public String edit()
	{
		if (outLink == null)
		{
			return "edit";
		}

		if (outLink.getResourceId() != null)
		{
			outLink.setAddress("http://nss.feinno.com/?ResourceId=" + outLink.getResourceId());
			outLink.setUserId(1);
		}

		if (outLink.getId() != null)
		{
			outLink = Factory.getOutLinkService().getById(outLink.getId());
		}

		return "edit";
	}

	public String editing()
	{
		// Update
		if (getRequest().getParameter("outLinkId") != null && getRequest().getParameter("outLinkId").length() > 0)
		{
			try
			{
				outLink = Factory.getOutLinkService().getById(Integer.parseInt(getRequest().getParameter("outLinkId")));
				outLink.setEndDate(getEndDate());
				outLink.setTitle(getRequest().getParameter("outLinkTitle"));
				outLink.setDescription(getRequest().getParameter("outLinkDescription"));
				outLink.setAddress(getRequest().getParameter("outLinkAddress"));
				Factory.getOutLinkService().saveOrUpdate(outLink);

				this.setResult(0);
				return SUCCESS;
			}
			catch (Exception e)
			{
				logger.error("修改失败!" + e.getMessage());
				this.setResult(2);
				return ERROR;
			}

		}
		// Add
		else
		{
			try
			{
				outLink = new OutLink();
				outLink.setResourceId(Integer.parseInt(getRequest().getParameter("resourceId")));
				outLink.setUserId(1);
				outLink.setTitle(getRequest().getParameter("outLinkTitle"));
				outLink.setDescription(getRequest().getParameter("outLinkDescription"));
				outLink.setAddress(getRequest().getParameter("outLinkAddress"));
				outLink.setDownloadCount(0);
				outLink.setEndDate(getEndDate());
				outLink.setCreateDate(new Timestamp(new Date().getTime()));
				Factory.getOutLinkService().save(outLink);

				this.setResult(1);
				return SUCCESS;
			}
			catch (Exception e)
			{
				logger.error("新增失败!" + e.getMessage());
				this.setResult(2);
				return ERROR;
			}
		}
	}

	public String deleting()
	{
		try
		{
			Factory.getOutLinkService().delete(outLink.getId());
			return "list";
		}
		catch (Exception e)
		{
			logger.error("删除失败!" + e.getMessage());
			return ERROR;
		}
	}
}
