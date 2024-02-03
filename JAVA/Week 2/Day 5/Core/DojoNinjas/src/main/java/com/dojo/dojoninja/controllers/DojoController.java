package com.dojo.dojoninja.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.dojo.dojoninja.models.Dojo;
import com.dojo.dojoninja.services.DojoService;


import jakarta.validation.Valid;

@Controller
public class DojoController {
	
	
	
	// DI
			@Autowired
			private DojoService DojoServ;
			
			
			// display all dojos
			@GetMapping("/dojos")
			public String home(@ModelAttribute("dojo") Dojo dojo, Model model) {
				// retrieve all dojos from db
				List<Dojo> alldojos = DojoServ.alldojos();
				model.addAttribute("alldojos",alldojos);
				return "home.jsp";
			}
			

			// Process Burger
			@PostMapping("/processDojo")
			public String createdojo(@Valid @ModelAttribute("dojo") Dojo dojo,
					BindingResult result,
					Model model) {
				if (result.hasErrors()) {
					// retrieve all books from db
					List<Dojo> alldojos =DojoServ.alldojos() ;
					model.addAttribute("alldojos",alldojos);
					return "home.jsp";
				}else {
					Dojo newdojo = DojoServ.createDojo(dojo);
					return "redirect:/dojos";
				}
				
			}
			
			@GetMapping("dojos/{id}")
			public String findOneDojoById(@PathVariable("id") Long id, Model model) {
				Dojo selectedDojo = DojoServ.findDojoById(id);
				model.addAttribute("dojo",selectedDojo);
				return "ShowOne.jsp";
			}


}
