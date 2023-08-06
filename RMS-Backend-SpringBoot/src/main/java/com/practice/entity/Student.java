package com.practice.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Student {
	
	@Id
	private String roll_no;
	
	private String name;
	
	private LocalDate dob;
	
	private Double score;

	public Student() { }
	
	public Student(String roll_no, String name, LocalDate dob, Double score) {
		super();
		this.roll_no = roll_no;
		this.name = name;
		this.dob = dob;
		this.score = score;
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

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

}
