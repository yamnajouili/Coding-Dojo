package com.dojo.savetravels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.dojo.savetravels.models.Travel;
import com.dojo.savetravels.repositories.ExpenseRepository;
   
@Service
public class ExpenseService {

	

	// DI
		@Autowired
		private ExpenseRepository expenseRepo;
		
		
		// READ ALL
		public List<Travel> alltravels(){
			return expenseRepo.findAll();
		}
		
		
		// CREATE
		public Travel createTravel(Travel t) {
			return expenseRepo.save(t);
		}
		
		
		

		// READ ONE
		public Travel findtravelById(Long id) {
			Optional<Travel> maybeTravel = expenseRepo.findById(id);
			if(maybeTravel.isPresent()) {
				return maybeTravel.get();
			}else {
				return null;
			}
		}
		
		
		
		// UPDATE
		public Travel updateTravel(Travel t) {
			return expenseRepo.save(t);
		}
		
	
		// DELETE
		public void deleteTravel(Long id) {
			expenseRepo.deleteById(id);
		}
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
