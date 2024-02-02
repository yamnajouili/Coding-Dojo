package com.dojo.burger.controllers;

import java.awt.print.Book;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.dojo.burger.models.Burger;
import com.dojo.burger.services.BurgerService;

import jakarta.validation.Valid;

@Controller

public class BurgerController {
	
	// DI
		@Autowired
		private BurgerService burgerServ;
		
		
		// display all burgers
		@GetMapping("/burgers")
		public String home(@ModelAttribute("burger") Burger burger, Model model) {
			// retrieve all burgers from db
			List<Burger> allBurgers = burgerServ.allburgers();
			model.addAttribute("allBurgers",allBurgers);
			return "home.jsp";
		}

		// Process Burger
		@PostMapping("/processBurger")
		public String createBurger(@Valid @ModelAttribute("burger") Burger burger,
				BindingResult result,
				Model model) {
			if (result.hasErrors()) {
				// retrieve all books from db
				List<Burger> allBurgers =burgerServ.allburgers() ;
				model.addAttribute("allBurgers",allBurgers);
				return "home.jsp";
			}else {
				Burger newBurger = burgerServ.createBurger(burger);
				return "redirect:/burgers";
			}
			
		}
		
		// Display Edit Form
		
		@GetMapping("/edit/{id}")
		public String getMethodName(Model model, @PathVariable("id") Long id) {
			// find the book by the id
			Burger selectedburger = burgerServ.findBurgerById(id);
			model.addAttribute("burger",selectedburger);
			return "edit.jsp";
		}
		
		
		@PutMapping("edit/{id}")
		public String editBurger(@Valid @ModelAttribute("burger") Burger burger, BindingResult result) {
			
			if(result.hasErrors()) {
				return "edit.jsp";
			}else {
				// if there are no errors save the updated book to DB
				burgerServ.updateBurger(burger);
			
				return "redirect:/burgers";
			}
		}

	
	
	

}
