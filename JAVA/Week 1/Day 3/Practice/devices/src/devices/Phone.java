package devices;

public class Phone extends Device {

	public Phone() {
		// TODO Auto-generated constructor stub
	}

	public Phone(int battery) {
		super(battery);
		// TODO Auto-generated constructor stub
	}

	
	
	public void MakingCall() {
		
		this.setBattery(this.getBattery()-5);
		
	}
	
	public void PlayingGame() {
		 this.setBattery(this.getBattery()- 20);
	}
	
	public void Charging() {
		this.setBattery(this.getBattery()+50); 
	}
}
