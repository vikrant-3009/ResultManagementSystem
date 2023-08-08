package com.practice.service;

import java.util.List;

import com.practice.dto.TeacherDTO;
import com.practice.entity.Teacher;

/**
 * 
 * @author vikrantkatoch
 * 
 * Service Interface for Teacher related information
 */
public interface TeacherService {
	
	public List<TeacherDTO> getAllTeachers();
	
	public boolean authenticateTeacher(Teacher teacher);

}
