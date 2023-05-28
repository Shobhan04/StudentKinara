package com.student.kinara.controller;

public class IdGenerate {
	
	
	public String generateId()
	{
		return "S- "+System.currentTimeMillis()%100;
	}

}
