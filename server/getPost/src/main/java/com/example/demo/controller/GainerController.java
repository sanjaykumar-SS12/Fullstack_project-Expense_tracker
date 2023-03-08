package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Gainers;
import com.example.demo.service.GainersService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class GainerController {


	@Autowired
	GainersService service;
	
	@GetMapping("/gainers")
	public List<Gainers> getGainers(){
		return service.readGainers();
	}
	
	@GetMapping("/gainers/{id}")
		public Optional<Gainers> getGainersById(@PathVariable int id) {
			return service.readGainersById(id);
	}
	

	@PostMapping("/gainers")
		public boolean add(@RequestBody Gainers gainers) {
			return service.addGainers(gainers);
	}
	
	@PutMapping("/gainers/{id}")
	public Gainers update(@RequestBody Gainers gainers) {
	return service.updateGainers(gainers);
	}
	
	@DeleteMapping("/gainers/{id}")
	public Boolean delete(@PathVariable int id) {
	return service.deleteGainersById(id);
	}
	

}