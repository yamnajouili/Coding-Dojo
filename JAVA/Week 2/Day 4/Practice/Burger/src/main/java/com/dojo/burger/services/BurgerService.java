package com.dojo.burger.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.burger.models.Burger;
import com.dojo.burger.repositories.BurgerRepository;


@Service
public class BurgerService {

	
	// DI
		@Autowired
		private BurgerRepository burgerRepo;
		
		
		// READ ALL
		public List<Burger> allburgers(){
			return burgerRepo.findAll();
		}
		
		
		// CREATE
		public Burger createBurger(Burger b) {
			return burgerRepo.save(b);
		}
		
		
		

		// READ ONE
		public Burger findBurgerById(Long id) {
			Optional<Burger> maybeBurger = burgerRepo.findById(id);
			if(maybeBurger.isPresent()) {
				return maybeBurger.get();
			}else {
				return null;
			}
		}
		
		
		
		// UPDATE
		public Burger updateBurger(Burger b) {
			return burgerRepo.save(b);
		}
		
	
}
