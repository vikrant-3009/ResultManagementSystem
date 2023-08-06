package com.practice.mapper;

import com.practice.dto.TeacherDTO;
import com.practice.entity.Teacher;

public class TeacherMapper {
	
	public static TeacherDTO mapToTeacherDTO(Teacher teacher) {
		TeacherDTO teacherDto = new TeacherDTO(teacher.getTeacherId());
		return teacherDto;
	}
	
}