package com.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.jparepository.UserRepository;
import com.springboot.model.User;

@CrossOrigin
@RestController
public class AuthController {

	@Autowired
	private UserRepository userRepository;
 

	@PostMapping("/register")
	public String register(@RequestBody User user) {
		userRepository.save(user);
		return "Registration successful";
	}

	@PostMapping("/login")
	public String login(@RequestBody User user) {
		User existingUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
		if (existingUser != null) {
			return "Login successful";
		} else {
			return "Login failed";
		}
	}
	
	@PostMapping("/recover-password")
	public ResponseEntity<String> recoverPassword(@RequestBody User user) {
	    User existingUser = userRepository.findByEmail(user.getEmail());
	    if (existingUser != null) {
	        // Implement your password recovery logic here
	        // For demonstration purposes, let's assume you want to return email and password
	        String response = "Email: " + existingUser.getEmail() + ", Password: " + existingUser.getPassword();
	        return ResponseEntity.ok(response);
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not found. Password recovery failed");
	    }
	}
 
}







