package com.feinno.nss.model.beans;
// default package



/**
 * User entity. @author MyEclipse Persistence Tools
 */
public class User  {

	// Fields    

    private Integer userId=0;
    private String name;
    private String sex;
    private Integer age=0;


   // Constructors

   /** default constructor */
   public User() {
   }

   
   /** full constructor */
   public User(String name, String sex, Integer age) {
       this.name = name;
       this.sex = sex;
       this.age = age;
   }

  
   // Property accessors

   public Integer getUserId() {
       return this.userId;
   }
   
   public void setUserId(Integer userId) {
       this.userId = userId;
   }

   public String getName() {
       return this.name;
   }
   
   public void setName(String name) {
       this.name = name;
   }

   public String getSex() {
       return this.sex;
   }
   
   public void setSex(String sex) {
       this.sex = sex;
   }

   public Integer getAge() {
       return this.age;
   }
   
   public void setAge(Integer age) {
       this.age = age;
   }
   
}
