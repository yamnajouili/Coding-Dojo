import java.util.ArrayList;
public class CafeUtil{
    public int getStreakGoal(){
        int[] myArray = {1, 2, 3, 4, 5,6,7,8,9,10};
        int sum=0;
        for(int i=0;i<myArray.length;i++){
            sum += myArray[i];
        }
        return sum;
    }

public double getOrderTotal(double[] prices){
    double sum =0;
    
    for (int i=0;i<prices.length;i++){
        sum+=prices[i];
    }return sum;
}

public void displayMenu(ArrayList<String> menu){
    
    for(int i=0;i<menu.size();i++){
        System.out.println(i+" "+menu.get(i));
    }
}
public void addCustomer(ArrayList<String> customers){
    System.out.println("Please enter your name:");
    String username = System.console().readLine();
    System.out.println("hello"+ username);
       System.out.println("There are "+customers.size()+ " people in front of you");
       customers.add(username); 


}
}