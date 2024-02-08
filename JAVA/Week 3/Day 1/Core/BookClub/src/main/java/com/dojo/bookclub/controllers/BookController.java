package com.dojo.bookclub.controllers;



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

import com.dojo.bookclub.models.Book;
import com.dojo.bookclub.models.User;
import com.dojo.bookclub.services.BookService;
import com.dojo.bookclub.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class BookController {
	
	
	
	

	// DI
		@Autowired
		private BookService bookServ;
		
		@Autowired
		private UserService userServ;
		
		
//		// display all burgers
//		@GetMapping("/expenses")
//		public String home(@ModelAttribute("expense") Travel travel, Model model) {
//			// retrieve all burgers from db
//			List<Travel> allexpenses = ExpenseServ.alltravels();
//			model.addAttribute("allexpenses",allexpenses);
//			return "home.jsp";
//		}

		@GetMapping("/books/new")
		public String create(@ModelAttribute("book") Book book) {
			
			return "create.jsp";
		}

		// Process Burger
		@PostMapping("/processBook")
		public String createbook(@Valid @ModelAttribute("book") Book book,
				BindingResult result,
				Model model ,HttpSession session) {
			if (result.hasErrors()) {
				
				return "create.jsp";
			}else {
				
				Long userId=(Long) session.getAttribute("user_id");
				User user=userServ.findUserById(userId);
				book.setUser(user);
				Book newbook = bookServ.createBook(book);
				return "redirect:/books";
			}
			
		}
		
		
		

		// Display Edit Form
		
		@GetMapping("/books/edit/{id}")
		public String getMethodName(Model model, @PathVariable("id") Long id) {
			// find the book by the id
		    Book selectedbook = bookServ.findBookById(id);
			model.addAttribute("book",selectedbook);
			return "edit.jsp";
		}
		
		
		@PutMapping("/books/{id}")
		public String editBook(@Valid @ModelAttribute("book") Book book, BindingResult result ,HttpSession session) {
			
			if(result.hasErrors()) {
				return "edit.jsp";
			}else {
				
				Long userId=(Long) session.getAttribute("user_id");
				User user=userServ.findUserById(userId);
				book.setUser(user);
				// if there are no errors save the updated book to DB
				
				bookServ.updateBook(book);
			
				return "redirect:/books";
			}
		}
		
		
		@DeleteMapping("/books/{id}")
		public String deleteBook(@PathVariable("id") Long id) {
			
			bookServ.deleteBook(id);
			
			return "redirect:/books";
		}
		
		@GetMapping("/books/{id}")
		public String findOnetravelById(@PathVariable("id") Long id, Model model) {
			Book selectedBook = bookServ.findBookById(id);
			model.addAttribute("book",selectedBook);
			return "showone.jsp";
		}


}
