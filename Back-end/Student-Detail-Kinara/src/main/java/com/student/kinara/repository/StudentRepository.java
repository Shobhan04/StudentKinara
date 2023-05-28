package com.student.kinara.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.student.kinara.model.Student;

@Repository
public interface StudentRepository extends MongoRepository<Student, String>{
	
	
	Page<Student> findAll(Pageable pageable);
	


	List<Student> findByName(String name);
	
	

	 //Page<Student> findByNameContaining(String query);
	 List<Student> findByNameContaining(String query);
	

	Page<Student> findByNameContainingIgnoreCase(String query, Pageable pageable);
	


	

}
