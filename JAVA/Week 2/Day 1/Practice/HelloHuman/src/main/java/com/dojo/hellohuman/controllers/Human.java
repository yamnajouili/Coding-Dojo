package com.dojo.hellohuman.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class Human {
	@GetMapping
	public String home(@RequestParam(value="name", required=false) String name,@RequestParam(value="lastname", required=false) String lastname) {
		
		if(name==null) {
			return "Hello Human";
			
		}
		
		return "Hello "+name+" "+lastname;
	}
	
	 

}
