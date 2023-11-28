package com.hna.hnamagotchi.controller;

import com.hna.hnamagotchi.model.User;
import com.hna.hnamagotchi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class GreetingApiController {

	@Autowired
	UserRepository userRepository;

	@GetMapping("/greeting")
	public ResponseEntity<Map<String, String>> greeting(@RequestParam(name="name", required=false, defaultValue="World") String name) {
		Map<String, String> data = new HashMap<>();

		data.put("greeting", "Hello, " + name);

		return new ResponseEntity<>(data, HttpStatus.OK);
	}

	@GetMapping("/greeting-user")
	public ResponseEntity<Map<String, String>> greetingUser(@RequestParam(name="user") Long id) {
		Optional<User> user = userRepository.findById(id);
		Map<String, String> data = new HashMap<>();

		if (user.isPresent()) {
			data.put("greeting", "Hello, " + user.get().getName());
		} else {
			data.put("greeting", "Hello, Unknown Traveler");
		}


		return new ResponseEntity<>(data, HttpStatus.OK);
	}
}
