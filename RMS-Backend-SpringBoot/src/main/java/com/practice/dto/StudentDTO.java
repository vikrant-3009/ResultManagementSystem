package com.practice.dto;

public class StudentDTO {
	
	public String roll_no;
	
	public String name;
	
	public StudentDTO() { }

	public StudentDTO(String roll_no, String name) {
		super();
		this.roll_no = roll_no;
		this.name = name;
	}

	public String getRoll_no() {
		return roll_no;
	}

	public void setRoll_no(String roll_no) {
		this.roll_no = roll_no;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
