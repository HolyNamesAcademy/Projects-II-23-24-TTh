package com.hna.webserver.controller;
import org.mindrot.jbcrypt.BCrypt;
import com.hna.webserver.model.User;
import com.hna.webserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
/**HASH PASSWORD IN API CONTROLLER*/
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

	public void saveUser(User user){
		userRepository.save(user);
	}

	@PostMapping("/users/signup")
	public ResponseEntity<User> signup(@RequestBody User user){
		System.out.println(user);
		if((user.getEmail()==null) || user.getEmail().equals("")){
			System.out.println("Please enter an email.");
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
		if (user.getEmail().length() < 18 || !(user.getEmail().substring(user.getEmail().length()-17, user.getEmail().length()).equals("holynames-sea.org"))) {
			System.out.println("Please enter an email with an HNA domain.");
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
		if((user.getName()==null || user.getName().equals(""))){
			System.out.println("Please enter your name.");
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
		if(user.getPassword()==null || user.getPassword().equals("")){
			System.out.println("Please enter a password.");
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
		if(user.getUsername()==null || user.getUsername().equals("")){
			System.out.println("Please enter a username.");
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
		//store in variable, loop over and see if it exists
		List<User> userList = userRepository.findAll();
		for (int i = 0; i<userList.size(); i++){
			if(userList.get(i).getUsername().equals(user.getUsername())){
				System.out.println("This username has already been taken. Please enter another username.");
				return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
			}
		}
		String pswd = user.getPassword();
		String hashed = BCrypt.hashpw(pswd, BCrypt.gensalt());
		user.setPassword(hashed);//
		saveUser(user);//SAVES HASHED PW
		System.out.println(user);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}

	@PostMapping("/users/login")
	public ResponseEntity<User> login(@RequestBody User user){
		if(user.getPassword()==null || user.getPassword().equals("")){
			System.out.println("Please enter a password.");
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}

		if(user.getUsername()==null || user.getUsername().equals("")){
			System.out.println("Please enter a username.");
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}

		List<User> userList = userRepository.findAll();
		for (int i = 0; i<userList.size(); i++){
			User current = userList.get(i);

			if(current.getUsername().equals(user.getUsername())){
				if (BCrypt.checkpw(user.getPassword(), current.getPassword())) {
					return new ResponseEntity<>(current, HttpStatus.ACCEPTED);
				}

				// Stop looking if they typed the password wrong.
				break;
			}
		}

		System.out.println("Your username and password do not match. Please re-enter your log-in information.");
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}

}
