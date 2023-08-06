package com.practice.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.practice.dto.StudentDTO;
import com.practice.entity.Student;

public interface StudentService {
	
	public Page<Student> getAllStudents(Pageable paging);
	
	public boolean authenticateStudent(StudentDTO studentDto);
	
	public Student getStudent(String roll_no);
	
	public boolean addNewStudent(Student student);
	
	public Student editStudent(String roll_no, Student student);
	
	public String deleteStudent(String roll_no);

}
