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
import com.dojo.dojoninja.models.Ninja;
import com.dojo.dojoninja.services.DojoService;
import com.dojo.dojoninja.services.NinjaService;

import jakarta.validation.Valid;

@Controller
public class NinjaController {


	// DI
		@Autowired
		private NinjaService NinjaSer;
		@Autowired
		private DojoService dojoSer;
		
		
		
		// display all ninjas
		@GetMapping("/ninja/new")
		public String home(@ModelAttribute("ninja") Ninja ninja, Model model) {
			
			List<Dojo> alldojos =  dojoSer.alldojos();
			model.addAttribute("alldojos",alldojos);
			return "index.jsp";
		}
		

		// Process Ninja
		@PostMapping("/processNinja")
		public String createninja(@Valid @ModelAttribute("ninja") Ninja ninja,
				BindingResult result,
				Model model) {
			if (result.hasErrors()) {
				// retrieve all books from db
				List<Ninja> allninjas =NinjaSer.allninjas() ;
				model.addAttribute("allninjas",allninjas);
				return "index.jsp";
			}else {
				Ninja newninja = NinjaSer.createNinja(ninja);
				return "redirect:/ninja/new";
			}
			}


				
		@GetMapping("ninja/{id}")
		public String findOneninjaById(@PathVariable("id") Long id, Model model) {
			Ninja selectedNinja = NinjaSer.findNinjaById(id);
			model.addAttribute("ninja",selectedNinja);
			return "showone.jsp";
		}




}






