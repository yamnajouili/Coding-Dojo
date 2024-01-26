package zookeeper;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Gorilla gorilla1 =new Gorilla(400);
		gorilla1.throwSomething();
		gorilla1.throwSomething();
		gorilla1.throwSomething();
		System.out.println(gorilla1.displayEnergy());
		
		gorilla1.eatBananas();
		gorilla1.eatBananas();
		gorilla1.climb();
		
		System.out.println(gorilla1.displayEnergy());
		
		
		
		Bat bat1=new Bat(500);
		bat1.attackTown();
		bat1.attackTown();
		bat1.attackTown();
		bat1.eatHumans();
		bat1.eatHumans();
		bat1.fly();
		bat1.fly();
		
		System.out.println(bat1.displayEnergy());
	}

}
