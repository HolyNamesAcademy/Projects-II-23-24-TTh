package com.hna.webserver.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;
    @Column(name = "hnaEmail")
    private String hnaEmail;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    public User() {

    }

    public User(String name) {
        this.name = name;
    }

    public User(String name, String hnaEmail, String username, String password){
        this.name = name;
        this.hnaEmail = hnaEmail;
        this.username = username;
        this.password = password;
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

    public String getUsername() {return username;}
    public void setUsername(String username) {this.username = username;}
    public String getHnaEmail() {return hnaEmail;}
    public void setHnaEmail(String hnaEmail) {this.hnaEmail = hnaEmail;}
    public String getPassword() {return password;}
    public void setPassword(String password){this.password = password;}

    @Override
    public String toString() {
        return "User [id=" + id + ", name=" + name + ", username=" + username+"], " + "password=" + password+", email=" + hnaEmail;
    }

    @OneToMany (mappedBy = "user")
    private List<Charby> charby;


}
