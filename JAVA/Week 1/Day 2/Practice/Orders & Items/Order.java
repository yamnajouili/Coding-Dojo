 import java.util.ArrayList;
 class Order{
    private String name;
    private double totale;
    private boolean ready;
    ArrayList<Item> items = new ArrayList<Item>() ;


    public Order(String name){
        this.name=name;
   
    
}
public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }


    public double getTotale() {
        return this.totale;
    }
    public void setTotale(double price ) {
        this.totale += price;
    }



    public boolean getReady() {
        return this.ready;
    }
    public void setReady(boolean ready) {
        this.ready = ready;
    }


    public ArrayList getItems(){
        return this.items;
    }

    public void setItems(Item item){
        this.items.add(item);
    }
}