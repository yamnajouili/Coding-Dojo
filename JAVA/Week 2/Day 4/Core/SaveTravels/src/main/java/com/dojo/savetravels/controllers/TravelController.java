package com.dojo.savetravels.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.dojo.savetravels.models.Travel;
import com.dojo.savetravels.services.ExpenseService;

import jakarta.validation.Valid;

@Controller
public class TravelController {
    
	
	

	// DI
		@Autowired
		private ExpenseService ExpenseServ;
		
		
		// display all burgers
		@GetMapping("/expenses")
		public String home(@ModelAttribute("expense") Travel travel, Model model) {
			// retrieve all burgers from db
			List<Travel> allexpenses = ExpenseServ.alltravels();
			model.addAttribute("allexpenses",allexpenses);
			return "home.jsp";
		}
		

		// Process Burger
		@PostMapping("/processExpense")
		public String createexpense(@Valid @ModelAttribute("expense") Travel travel,
				BindingResult result,
				Model model) {
			if (result.hasErrors()) {
				// retrieve all books from db
				List<Travel> allexpenses =ExpenseServ.alltravels() ;
				model.addAttribute("allexpenses",allexpenses);
				return "home.jsp";
			}else {
				Travel newexpense = ExpenseServ.createTravel(travel);
				return "redirect:/expenses";
			}
			
		}
		
		
		

		// Display Edit Form
		
		@GetMapping("/edit/{id}")
		public String getMethodName(Model model, @PathVariable("id") Long id) {
			// find the book by the id
			Travel selectedexpense = ExpenseServ.findtravelById(id);
			model.addAttribute("expense",selectedexpense);
			return "edit.jsp";
		}
		
		
		@PutMapping("edit/{id}")
		public String editExpense(@Valid @ModelAttribute("expense") Travel travel, BindingResult result) {
			
			if(result.hasErrors()) {
				return "edit.jsp";
			}else {
				// if there are no errors save the updated book to DB
				ExpenseServ.updateTravel(travel);
			
				return "redirect:/expenses";
			}
		}
		
		
		@DeleteMapping("/{id}")
		public String deleteExpense(@PathVariable("id") Long id) {
			
			ExpenseServ.deleteTravel(id);
			
			return "redirect:/expenses";
		}
		
		@GetMapping("expense/{id}")
		public String findOnetravelById(@PathVariable("id") Long id, Model model) {
			Travel selectedTravel = ExpenseServ.findTravel(id);
			model.addAttribute("travel",selectedTravel);
			return "showone.jsp";
		}

}
