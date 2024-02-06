package com.hna.webserver.model;  
import java.util.List;    
import java.util.ArrayList;    
import org.springframework.beans.factory.annotation.Autowired;    
import org.springframework.stereotype.Service;  
import com.hna.webserver.model.User;
import com.hna.webserver.repository.UserRepository;
@Service
public class UserService {
    private UserRepository respository; 

}
