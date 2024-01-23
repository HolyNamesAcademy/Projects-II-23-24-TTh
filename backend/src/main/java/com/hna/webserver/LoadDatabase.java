package com.hna.webserver;

import com.hna.webserver.model.User;
import com.hna.webserver.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(UserRepository repository) {
        return args -> {
            log.info("Preloading " + repository.save(new User("Bilbo Baggins", "BBaggins@holynames-sea.org", "bilba")));
            log.info("Preloading " + repository.save(new User("Frodo Baggins", "FBaggins@holynames-sea.org", "froba")));
            log.info("Preloading " + repository.save(new User("Gandalf Baggins", "GBaggins@holynames-sea.org", "ganba")));
        };
    }
}
