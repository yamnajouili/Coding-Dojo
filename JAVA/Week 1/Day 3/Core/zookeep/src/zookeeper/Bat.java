package zookeeper;

public class Bat extends Mammals {

	public Bat() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Bat(int energy) {
		super(energy);
		// TODO Auto-generated constructor stub
	}

	
	
	public String fly() {
		this.setEnergy(getEnergy()-50);
		return "the bat is airborne";
         }
    
	

	public String eatHumans() {
		this.setEnergy(getEnergy()+25);
		return "the bat's satisfaction";
         }
	

	public String attackTown() {
		this.setEnergy(getEnergy()-100);
		return "the bat's attack";
         }
	
	






}




