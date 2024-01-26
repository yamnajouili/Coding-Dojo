 class Item {
    private String name;
    private double price;

    public Item(String name){
    this.name = name;
    this.price = 100.45;
    
}



public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return this.price;
    }
    public void setPrice(double value) {
        this.price = value;
    }



}