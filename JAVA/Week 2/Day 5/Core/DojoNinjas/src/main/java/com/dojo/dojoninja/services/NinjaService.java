package com.dojo.dojoninja.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.dojoninja.models.Ninja;
import com.dojo.dojoninja.repositories.NinjaRepository;



@Service
public class NinjaService {
	
	// DI
			@Autowired
			private NinjaRepository NinjaRepo;
			
			

			// READ ALL
			public List<Ninja> allninjas(){
				return NinjaRepo.findAll() ;
			}


			// CREATE
			public Ninja createNinja(Ninja n) {
				return NinjaRepo.save(n);
			}
			

			// READ ONE
			public Ninja findNinjaById(Long id) {
				Optional<Ninja> maybeNinja = NinjaRepo.findById(id);
				if(maybeNinja.isPresent()) {
					return maybeNinja.get();
				}else {
					return null;
				}
			}
			
			
			
			// UPDATE
			public Ninja updateNinja(Ninja n) {
				return NinjaRepo.save(n);
			}
			
		
			// DELETE
			public void deleteNinja(Long id) {
				NinjaRepo.deleteById(id);
			}
}
