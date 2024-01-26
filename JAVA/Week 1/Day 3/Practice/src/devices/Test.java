package devices;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Phone phone1=new Phone(100);
		phone1.MakingCall();
		phone1.MakingCall();
		phone1.MakingCall();
		
		phone1.PlayingGame();
		phone1.PlayingGame();
		phone1.Charging();
		
		System.out.println(phone1.displayStatus());

	}

}
