package com.hna.webserver.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "charbeez")
public class Charby {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "birthday")
    private LocalDate birthday;

    // @OneToMany (cascade=ALL, mappedBy="CharbyID")
    // public Set<Feeding> getFeedings() { return feedings; }

   
    @OneToMany (mappedBy = "CharbyID")
    private List<Feeding> feedings = new ArrayList<>();
    

    public Charby() {

    }

    public Charby(String name) {
        this.name = name;
        this.birthday = LocalDate.now();
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirthday(){
        return birthday.toString();
    }

    public void setBirthday(LocalDate date){
        this.birthday = date;
    }

    @Override
    public String toString() {
        return "Charby [id=" + id + ", name=" + name + "]";
    }


    @ManyToOne
    @JoinColumn (name = "user_id")
    private User user;

}
