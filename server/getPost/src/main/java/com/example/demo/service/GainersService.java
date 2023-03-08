package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Gainers;
import com.example.demo.repository.GainersRepository;

@Service
public class GainersService {
	@Autowired
	GainersRepository repository;
	
	public boolean addGainers(Gainers gainers) {
		repository.save(gainers);
		return true;
	}
	
	public List<Gainers> readGainers() {
		return repository.findAll();
	}
	
	public Optional<Gainers> readGainersById(int id) {
		return repository.findById(id);
	}
	
	public Gainers updateGainers(Gainers gainers) {
		repository.save(gainers);
		return gainers;
	}
	
	public Boolean deleteGainersById(int id) {
		repository.deleteById(id);
		return true;
	}

}