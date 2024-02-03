package com.dojo.dojoninja.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.dojoninja.models.Ninja;


@Repository

public interface NinjaRepository extends CrudRepository<Ninja, Long> {
	
	
	// Find ALL ninjas
			List<Ninja> findAll();

}
