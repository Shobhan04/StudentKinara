package com.student.kinara.controller;


import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.student.kinara.model.Student;
import com.student.kinara.service.StudentService;


@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000/")
public class StudentController {
	
	  private final int PAGE_SIZE = 5; // Define your desired page size

	    @Autowired
	    private StudentService studentService;
	    
	  

	   @PostMapping
	   public Student saveStudent(@RequestBody Student student)
	   {
		   IdGenerate generate=new IdGenerate();
		   student.setId(generate.generateId());
		   return this.studentService.saveStudent(student);
	   }
	   

		@GetMapping("/display-student/{page}")
		public Page<Student> showContact(@PathVariable("page") Integer page) {
			
			System.out.println("called");
				Pageable pageable=PageRequest.of(page, 5);
				Page<Student> list=this.studentService.displayStudentList(pageable);
			
			return list;
		
		}

	    @GetMapping("/search/{searchQuery}")
	    public Page<Student> searchStudents(@PathVariable("searchQuery") String searchQuery,Integer pages) {
	    	Pageable pageable=PageRequest.of(0, 5);
	    	Page<Student> page=this.studentService.searchNameIgnoreTheCase(searchQuery, pageable);
			return page;
	    }
	    
	    

	    


	




	

}
