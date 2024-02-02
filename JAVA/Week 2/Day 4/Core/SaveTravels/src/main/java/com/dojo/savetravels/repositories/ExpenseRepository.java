package com.dojo.savetravels.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.savetravels.models.Travel;


@Repository
public interface ExpenseRepository extends CrudRepository<Travel, Long> {
	
	
	// Find ALL BOOKS
		List<Travel> findAll();

}
