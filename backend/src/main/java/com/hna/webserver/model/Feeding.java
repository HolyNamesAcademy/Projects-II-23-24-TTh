package com.hna.webserver.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.DateTime;


@Entity
@Table(name = "feedingtable")
public class FeedingTable {

  
    @Column(charbyID = "CharbyID")
    private long CharbyID;

    @Column(lastTimeFed = "lastTimeFed")
    private DateTime lastTimeFed;

    @Column (hungerLevel="hungerLevel")
    private int hungerLevel;

    public FeedingTable() {

    }

    public Charby(String id) {
        this.CharbyID = id;
        this.lastTimeFed = DateTime.now();
    }

    public long getId() {
        return id;    }

    public String getLastTimeFed() {
        return lastTimeFed;
    }

    public void setLastTimeFed(DateTime lastTimeFed) {
        this.lastTimeFed = lastTimeFed;
    }

    public String getHungerLevel(){
        
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
