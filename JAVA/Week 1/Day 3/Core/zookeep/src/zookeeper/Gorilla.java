package zookeeper;

public class Gorilla extends Mammals {

	public Gorilla() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Gorilla(int energy) {
		super(energy);
		// TODO Auto-generated constructor stub
	}
	
	
public String throwSomething() {
	this.setEnergy(this.getEnergy()-5);
	return " gorilla has thrown something";
}


public String eatBananas() {
	this.setEnergy(getEnergy()+10);
	return "gorilla's satisfaction";
}
 public String climb() {
	 this.setEnergy(getEnergy()-10);
	 return "gorilla has climbed a tree";
 }








}
