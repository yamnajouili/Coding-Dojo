package com.dojo.dojoninja.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dojo.dojoninja.models.Dojo;


public interface DojoRepository extends CrudRepository<Dojo, Long> {
	
	// Find ALL ninjas
				List<Dojo> findAll();


}
