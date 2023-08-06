package com.practice.service;

import java.util.List;

import com.practice.dto.TeacherDTO;
import com.practice.entity.Teacher;

public interface TeacherService {
	
	public List<TeacherDTO> getAllTeachers();
	
	public boolean authenticateTeacher(Teacher teacher);

}
