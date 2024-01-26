import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
      Item item1= new Item("item1");
       Item item2= new Item("item2");
        Item item3= new Item("item3");
         Item item4= new Item("item4");
       System.out.println(item2.getName());
       System.out.println(item3.getName());
       System.out.println(item4.getName());
       item1.setName("mocha");
       item2.setName("latte");
       item3.setName("drip coffee");
       item4.setName("cappuccino");
       System.out.println(item1.getName());

        item1.setPrice(140.44);
         item2.setPrice(3.2);
          item3.setPrice(170.400);
           item4.setPrice(14.15);
        System.out.println(item1.getPrice());
        //  System.out.println(item2.setName("latte"));
        //   System.out.println(item3.setName("drip coffee"));
        //    System.out.println(item4.setName("cappuccino"));
        Order order1=new Order("order1");
        Order order2=new Order("order2");
        Order order3=new Order("order3");
        Order order4=new Order("order4");
        System.out.println(order1.getName());
        order1.setName("Cindhuri");
         System.out.println(order1.getName());
         order2.setName("Jimmy");
         order3.setName("Noah");
         order4.setName("Sam");
         order2.setItems(item1);
        //  order2.setTotale(item1.getPrice
          System.out.println(order2.getItems());
           order2.setTotale(item1.getPrice());
            System.out.println(order2.getTotale());
            // ====================================
            order3.setItems(item4);
            System.out.println(order3.getItems());
            order3.setTotale(item4.getPrice());
            System.out.println(order3.getTotale());
            // ===================================
            order4.setItems(item2);
            System.out.println(order4.getItems());
            order4.setTotale(item2.getPrice());
             System.out.println(order4.getTotale());
// =================================================
order1.setReady(true);
// =============================================
order4.setItems(item2);
order4.setItems(item2);
order4.setTotale(item2.getPrice()*2);
 System.out.println(order4.getTotale());
 System.out.println(order4.getItems());


        //  System.out.println(order4.getName());
// ==================================================
order2.setReady(true);
System.out.println(order2.getReady());

        
    }
}
