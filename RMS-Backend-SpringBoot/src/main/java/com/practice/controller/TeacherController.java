package com.practice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.dto.TeacherDTO;
import com.practice.entity.Teacher;
import com.practice.service.TeacherService;

@RestController
@RequestMapping("/api/teachers")
@CrossOrigin("http://localhost:4200/")
public class TeacherController {
	
	@Autowired
	private TeacherService teacherService;
	
	@GetMapping
	public ResponseEntity<List<TeacherDTO>> getAllTeachers() {
		List<TeacherDTO> teachers = teacherService.getAllTeachers();
		return new ResponseEntity<>(teachers, HttpStatus.OK);
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<String> authenticateTeacher(@RequestBody Teacher teacher) {
		boolean isCorrectCredentials = teacherService.authenticateTeacher(teacher);
		System.out.println(isCorrectCredentials);
		return isCorrectCredentials ? 
				ResponseEntity.status(HttpStatus.OK).body("Credentials are correct.") : 
				ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Credentials");
	}

}
