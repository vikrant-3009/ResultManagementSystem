package com.practice.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Teacher {
	
	@Id
	private String teacherId;

	private String password;
	
	public Teacher() {  }
	
	public Teacher(String teacherId, String password) {
		super();
		this.teacherId = teacherId;
		this.password = password;
	}

	public String getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
