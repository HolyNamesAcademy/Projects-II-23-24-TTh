package com.hna.webserver.repository;

import com.hna.webserver.model.Feeding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface FeedingRepository extends JpaRepository<Feeding, Long> {
    
}