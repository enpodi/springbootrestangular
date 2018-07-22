package com.enrique.pomposo.crud.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enrique.pomposo.crud.models.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long> {

}
