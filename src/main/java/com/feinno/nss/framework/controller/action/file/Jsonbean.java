package com.feinno.nss.framework.controller.action.file;

import java.util.List;

public class Jsonbean{
	 private String data;
	 private Attr attr;
	 private String state;
	 private List<Jsonbean> children;
	 
	 public void setData(String data)
	 {
		this.data = data;
	 }
	 public String getData(){
		 return this.data;
	 }
	 
	 public void setAttr(Attr attr){
		 this.attr=attr;
	 }
	 
	 public Attr getAttr(){
		 return this.attr;
	 }
	 
	 public void setState(String state)
	 {
		 this.state = state;
	 }
	 public String getState()
	 {
		 return this.state;
	 }
	 
	 public void setChildren(List<Jsonbean> children)
	 {
		 this.children=children;
	 }
	 
	 public List<Jsonbean> getChildren(){
		 return this.children;
	 }
	 
	}