package com.dojo.dojoninja.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.dojoninja.models.Dojo;

import com.dojo.dojoninja.repositories.DojoRepository;


@Service
public class DojoService {
	
	
	// DI
				@Autowired
				private DojoRepository DojoRepo;
				
				

				// READ ALL
				public List<Dojo> alldojos(){
					return DojoRepo.findAll() ;
				}


				// CREATE
				public Dojo createDojo(Dojo d) {
					return DojoRepo.save(d);
				}
				

				// READ ONE
				public Dojo findDojoById(Long id) {
					Optional<Dojo> maybeDojo = DojoRepo.findById(id);
					if(maybeDojo.isPresent()) {
						return maybeDojo.get();
					}else {
						return null;
					}
				}
				
				
				
				// UPDATE
				public Dojo updateDojo(Dojo d) {
					return DojoRepo.save(d);
				}
				
			
				// DELETE
				public void deleteDojo(Long id) {
					DojoRepo.deleteById(id);
				}


}
