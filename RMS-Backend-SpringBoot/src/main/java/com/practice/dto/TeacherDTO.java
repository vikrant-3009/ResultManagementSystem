package com.practice.dto;

public class TeacherDTO {
	
	private String teacherId;
	
	public TeacherDTO() { }

	public TeacherDTO(String teacherId) {
		super();
		this.teacherId = teacherId;
	}

	public String getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}
	
}
