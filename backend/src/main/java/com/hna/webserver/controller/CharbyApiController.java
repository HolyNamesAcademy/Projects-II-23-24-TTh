package com.hna.webserver.controller;

import com.hna.webserver.model.Charby;
import com.hna.webserver.repository.CharbyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CharbyApiController {

	@Autowired
	CharbyRepository CharbyRepository;

	@GetMapping("/charbeez")
	public ResponseEntity<List<Charby>> all() {
		return new ResponseEntity<>(CharbyRepository.findAll(), HttpStatus.OK);
	}

	@GetMapping("/charbeez/{id}")
	public ResponseEntity<Charby> one(@PathVariable Long id) {
		Optional<Charby> charby = CharbyRepository.findById(id);

		if (charby.isPresent()) {
			return new ResponseEntity<>(charby.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

}
