package com.hna.webserver.controller;

import com.hna.webserver.model.User;
import com.hna.webserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserApiController {

	@Autowired
	UserRepository userRepository;

	@GetMapping("/users")
	public ResponseEntity<List<User>> all() {
		return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
	}

	@GetMapping("/users/{id}")
	public ResponseEntity<User> one(@PathVariable Long id) {
		Optional<User> user = userRepository.findById(id);

		if (user.isPresent()) {
			return new ResponseEntity<>(user.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	public void saveUser(@RequestBody User user){
		User save = userRepository.save(user);
	}
	@PostMapping("/users/signup")
	public ResponseEntity<User> signup(@RequestBody User user){
		if (!(user.getHnaEmail().substring(user.getHnaEmail().length()-18, user.getHnaEmail().length()).equals("@holynames-sea.org"))) {
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
		if((user.getName().equals(null))){
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
		if(user.getPassword().equals(null)){
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
		if(user.getUsername().equals(null)){
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
		//store in variable, loop over and see if it exists
		List<User> userList = userRepository.findAll();
		for (int i = 0; i<userList.size(); i++){
			if(userList.get(i).getUsername().equals(user.getUsername())){
				return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
			}
		}
		saveUser(user);
		return new ResponseEntity<>(HttpStatus.CREATED);

	}

}
