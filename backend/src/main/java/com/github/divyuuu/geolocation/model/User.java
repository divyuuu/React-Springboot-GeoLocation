package com.github.divyuuu.geolocation.model;


import jakarta.persistence.*;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Setter(AccessLevel.NONE)
    private UUID uuid;

    @Column(unique = true, nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String name;
    private String password;
    private Double rating;
    private Integer totalRides;

    @OneToOne(mappedBy = "user")
    private Driver driver;
    @OneToOne(mappedBy = "user")
    private Passenger passenger;
}