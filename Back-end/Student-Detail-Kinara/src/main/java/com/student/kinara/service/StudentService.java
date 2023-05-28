package com.student.kinara.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.student.kinara.model.Student;
import com.student.kinara.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	
	public Student saveStudent(Student student)
	{
		return this.studentRepository.save(student);
	}


	public Page<Student> displayStudentList(Pageable pageable) {
		return this.studentRepository.findAll(pageable);
	}


	public List<Student> findByNameContainingAndUser(String query) {
		
		return this.studentRepository.findByName(query);
	}
	
	  public List<Student> searchStudentsByQuery(String query) {
	        return studentRepository.findByNameContaining(query);
	    }
		  
	public Page<Student> searchNameIgnoreTheCase(String name,Pageable pageable)
	  {
		return this.studentRepository.findByNameContainingIgnoreCase(name, pageable);
	  }
	  


	
	
	

}
