package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Gainers {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private int id;
	
	private String name;
	
	private double beforePrice;
	

	private double afterPrice;
	
	private double increasePercentage;
	
	
	private double topGain;
	
	
	
	public Gainers() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getBeforePrice() {
		return beforePrice;
	}
	public void setBeforePrice(double beforePrice) {
		this.beforePrice = beforePrice;
	}
	public double getAfterPrice() {
		return afterPrice;
	}
	public void setAfterPrice(double afterPrice) {
		this.afterPrice = afterPrice;
	}
	public double getIncreasePercentage() {
		return increasePercentage;
	}
	public void setIncreasePercentage(double increasePercentage) {
		this.increasePercentage = increasePercentage;
	}
	public double gettopGain() {
		return topGain;
	}
	public void settopGain(double topGain) {
		this.topGain = topGain;
	}
	
	@Override
	public String toString() {
		return "Gainers [id=" + id + ", name=" + name + ", beforePrice=" + beforePrice + ", afterPrice=" + afterPrice
				+ ", increasePercentage=" + increasePercentage + ", topGain=" + topGain + "]";
	}

}