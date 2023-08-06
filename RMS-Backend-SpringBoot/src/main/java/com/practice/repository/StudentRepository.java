package com.practice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practice.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, String> {
	
}
