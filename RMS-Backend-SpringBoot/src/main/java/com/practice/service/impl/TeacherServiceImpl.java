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

@Service
public class TeacherServiceImpl implements TeacherService {
	
	@Autowired
	private TeacherRepository teacherRepository;

	public List<TeacherDTO> getAllTeachers() {
		List<Teacher> teachers = teacherRepository.findAll();
		
		return teachers.stream().map(TeacherMapper::mapToTeacherDTO).collect(Collectors.toList());
	}

	public boolean authenticateTeacher(Teacher teacher) {
		Optional<Teacher> teacherObj = teacherRepository.findById(teacher.getTeacherId());
		
		if(teacherObj.isPresent() && teacherObj.get().getPassword().equals(teacher.getPassword())) {
			return true;
		}
		return false;
	}

}