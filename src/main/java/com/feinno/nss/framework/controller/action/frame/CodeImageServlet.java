/**
 * Copyright (c) 2010 Feinno Information Technology(Beijing) Co.Ltd
 */

package com.feinno.nss.framework.controller.action.frame;

import java.io.IOException;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.feinno.nss.core.utils.CodeImageGenerator;

/**
 * ClassName:CodeImageServlet生成验证码的SERVLET类
 * 
 * @author DuYu
 * @Date 2010-3-30
 * @version Revision 1.0
 */
public class CodeImageServlet extends HttpServlet {

	private static final long serialVersionUID = -8850544733334343419L;

	/*
	 * 
	 * (non-Javadoc)
	 * 
	 * @see
	 * javax.servlet.http.HttpServlet#doGet(javax.servlet.http.HttpServletRequest
	 * , javax.servlet.http.HttpServletResponse)
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("image/jpeg");

		CodeImageGenerator cig = new CodeImageGenerator();

		ImageIO.write(cig.getImage(), "JPEG", response.getOutputStream());

		request.getSession().setAttribute("codeImage", cig.getCode());

	}

	/*
	 * 
	 * (non-Javadoc)
	 * 
	 * @see
	 * javax.servlet.http.HttpServlet#doPost(javax.servlet.http.HttpServletRequest
	 * , javax.servlet.http.HttpServletResponse)
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doGet(request, response);
	}
}
