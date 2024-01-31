package com.dojo.daikichiroutes.controlllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class ApiControllers {
	@GetMapping("")
	public String home() {
		return "Welcome!";
		
	}
	
	@GetMapping("/today")
	public String home2() {
		return "Today you will find luck in all your endeavors!";
		
	}
	
	

	@GetMapping("/tomorrow")
	public String home3() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
		
	}
	
	

}
