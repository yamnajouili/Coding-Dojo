package devices;

public class Device {
	private int battery;

	public Device() {
		
	}

	public Device(int battery) {
	
		this.battery = battery;
	}

	public int getBattery() {
		return battery;
	}

	public void setBattery(int battery) {
		this.battery = battery;
	}
	
	public String displayStatus() {
		
		return String.format("Battery remaining : %d", this.getBattery());
	}
	
	

}
