package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
	private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;
    
    // TO DO: Implement a constructor that takes an ID and a role
    public AdminUser() {
    	super();
    }
    
    public AdminUser(Integer employeeID, String role) {
    	super();
    	this.employeeID = employeeID;
    	this.role = role;
    	this.securityIncidents=new ArrayList<String>();
    }
      
    

	// TO DO: Implement HIPAACompliantUser!
    // TO DO: Implement HIPAACompliantAdmin!
    
    public Integer getEmployeeID() {
		return employeeID;
	}

	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
	public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		// TODO Auto-generated method stub
		return this.securityIncidents;
	}
	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		String numberString = Integer.toString(pin);
		 int count = numberString.length();
		 if(count>=6) {
			 return true;
		 }
		 else {
			 return false;
		 }
		 
		
	}
	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		
		if(this.getEmployeeID()==confirmedAuthID) {
			return true;
		}
		else {
			authIncident();
			return false;
			
		}
		
	}
    
    // TO DO: Setters & Getters
}
