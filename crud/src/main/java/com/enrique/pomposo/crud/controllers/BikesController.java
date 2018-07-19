package com.enrique.pomposo.crud.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enrique.pomposo.crud.models.Bike;

@RestController
@RequestMapping("/api/v1/bikes")
public class BikesController {
	
	@GetMapping
	public List<Bike> list(){
		List<Bike> bikes = new ArrayList<>();
		return bikes;
	}
	
	public void create(@RequestBody Bike bike) {
		
	}

}
