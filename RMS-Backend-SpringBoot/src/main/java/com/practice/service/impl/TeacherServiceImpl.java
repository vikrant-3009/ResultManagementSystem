package com.practice.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practice.dto.TeacherDTO;
import com.practice.entity.Teacher;
import com.practice.mapper.TeacherMapper;
import com.practice.repository.TeacherRepository;
import com.practice.service.TeacherService;

/**
 * 
 * @author vikrantkatoch
 *
 * Service implementation class for teacher service interface
 * Handles business logic for teacher data
 */
@Service
public class TeacherServiceImpl implements TeacherService {
	
	@Autowired
	private TeacherRepository teacherRepository;
	
	/* Returns the complete list of teacher DTO */
	public List<TeacherDTO> getAllTeachers() {
		List<Teacher> teachers = teacherRepository.findAll();
		
		return teachers.stream().map(TeacherMapper::mapToTeacherDTO).collect(Collectors.toList());
	}
	
	/* Returns boolean response, after authenticating the provided teacher object */
	public boolean authenticateTeacher(Teacher teacher) {
		Optional<Teacher> teacherObj = teacherRepository.findById(teacher.getTeacherId());
		
		if(teacherObj.isPresent() && teacherObj.get().getPassword().equals(teacher.getPassword())) {
			return true;
		}
		return false;
	}

}