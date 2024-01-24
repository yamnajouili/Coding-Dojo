
import java.util.ArrayList;
public class TestCafe{
    public static void main(String[] args){
        CafeUtil myCafe=new CafeUtil();
        int TestgetStreakGoal=myCafe.getStreakGoal();
        System.out.println(TestgetStreakGoal);
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        double test= myCafe.getOrderTotal(lineItems);
        System.out.println(test );
         ArrayList<String> menut = new ArrayList<String>();
         
        menut.add("drip coffee");
        menut.add("cappuccino");
        menut.add("latte");
        menut.add("mocha");
        myCafe.displayMenu(menut);

         // System.out.println("\n----- Add Customer Test-----");
        ArrayList<String> customers = new ArrayList<String>();
        // // --- Test 4 times ---
        for (int i = 0; i < 4; i++) {
            myCafe.addCustomer(customers);
            System.out.println("\n");
              System.out.println(customers);
        }
    
    }
}