public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double  dripcoffeePrice=3.5;
        double lattePrice=4.5;
        double cappuccinoPrice=2.0;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "jimmy";
        String customer4 = "noah.";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
         boolean isReadyOrder2 = true;
          boolean isReadyOrder3 = false;
           boolean isReadyOrder4= true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// Cindhuri ordered a coffee. Based on her order status, print the correct status message to the console.
        System.out.println(customer1+pendingMessage);
        // Noah ordered a cappuccino. Use an if statement to check the status:
        if(isReadyOrder4){
             System.out.println(customer4+readyMessage);
             System.out.println(displayTotalMessage+cappuccinoPrice);

        }
        else  {
              System.out.println(customer4 + pendingMessage);
        }
        // =================================================
         System.out.println(displayTotalMessage+lattePrice*2);

         if(isReadyOrder2){
             System.out.println(customer2+readyMessage);

         }
         else{
             System.out.println(customer2+pendingMessage);
         }
        //  ===================================
         System.out.println(displayTotalMessage+(lattePrice-dripcoffeePrice));


    }
}
