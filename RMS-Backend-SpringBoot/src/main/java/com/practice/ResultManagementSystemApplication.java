package com.practice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.practice.entity.Teacher;
import com.practice.repository.TeacherRepository;

@SpringBootApplication
public class ResultManagementSystemApplication implements CommandLineRunner {
	
	@Autowired
	private TeacherRepository teacherRepository;

	public static void main(String[] args) {
		SpringApplication.run(ResultManagementSystemApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		Teacher teacher1 = new Teacher("fc101", "abc@123");
		Teacher teacher2 = new Teacher("fc102", "def@456");
		
		teacherRepository.save(teacher1);
		teacherRepository.save(teacher2);
	}

}
