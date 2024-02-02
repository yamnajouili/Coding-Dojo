package com.dojo.omikujiform.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;
@Controller
public class FormController {
	
	
	
	
	@GetMapping("/")
	public String form() {

		
		
		return "form.jsp";
	}
	@PostMapping("/processform")
	public String creationform(@RequestParam("number") int number,@RequestParam("city") String city,@RequestParam("person") String person,@RequestParam("hobby") String hobby,@RequestParam("living") String living,@RequestParam("somthing") String somthing,HttpSession session) {
		
		
		session.setAttribute("keynumber", number);
		session.setAttribute("keycity", city);
		session.setAttribute("keyperson", person);
		session.setAttribute("keyhobby", hobby);
		session.setAttribute("keyliving", living);
		session.setAttribute("keysomthing", somthing);
		
		return "redirect:/result";
	}
	@GetMapping("/result")
	public String result() {

		return "result.jsp";
	}

}
