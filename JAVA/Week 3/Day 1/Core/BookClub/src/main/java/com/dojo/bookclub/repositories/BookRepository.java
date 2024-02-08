package com.dojo.bookclub.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.bookclub.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
	
	
	
	// Find ALL BOOKS
		List<Book> findAll();

}
