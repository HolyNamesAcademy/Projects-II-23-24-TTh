package com.hna.webserver.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;


@Entity
@Table(name = "feedingtable")
public class Feeding {

  
    @Column(name = "CharbyID")
    private long CharbyID;

    @Column(name = "lastTimeFed")
    private LocalDateTime lastTimeFed;

    @Column (name ="hungerLevel")
    private int hungerLevel;

    @ManyToOne
    @JoinColumn (name = "CharbyID")
    private Charby charby;
    

    public Feeding(Long CharbyID, int hungerLevel) {
        this.CharbyID = CharbyID;
        this.lastTimeFed = LocalDateTime.now();
        this.hungerLevel = hungerLevel;
    }

    public long getId() {
        return CharbyID;    }

    public LocalDateTime getLastTimeFed() {
        return lastTimeFed;
    }

    public void setLastTimeFed(LocalDateTime lastTimeFed) {
        this.lastTimeFed = lastTimeFed;
    }

    public int getHungerLevel(){
        return hungerLevel;
    }

    public void setHungerLevel(int level){
        this.hungerLevel = level;
    }

    @Override
    public String toString() {
        return "Charby Feeding Info [id=" + CharbyID + ", last time fed=" + lastTimeFed +  "Hunger Level= " +hungerLevel"]";
    }


    @ManyToOne
    @JoinColumn (name = "user_id")
    private User user;

}
