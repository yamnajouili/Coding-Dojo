package com.dojo.daikichipathvariables.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class DaikichiPathVariables {
	
	@GetMapping("/{variable1}/{variable2}")
	
	public String home(@PathVariable("variable1") String variable1, @PathVariable("variable2") String variable2) {
		return String.format("Congratulations! You will soon %s to %s!",variable1,variable2);
		
	}
	
	@GetMapping("/lotto/{variable1}")
	public String home1(@PathVariable("variable1") int variable1) {
		
		if(variable1%2==0) {
			return"You will take a grand journey in the near future, but be weary of tempting offers";
		}
		return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends";
	}
	
	

}
