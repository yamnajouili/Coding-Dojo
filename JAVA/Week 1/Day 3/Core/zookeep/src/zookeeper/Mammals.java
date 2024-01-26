package zookeeper;

public class Mammals {

	
	
	
	
public Mammals() {

	}

public Mammals(int energy) {

	this.energy = energy;
}

private int energy; 

public int getEnergy() {
	return energy;
}

public void setEnergy(int energy) {
	this.energy = energy;
}
//

public String displayEnergy() {
	return String.format("energy is :%s",this.energy ) ;
}
	
}
