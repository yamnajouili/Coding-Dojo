public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
         BankAccount userAcount1=new BankAccount(144.00,544.00);
         BankAccount userAcount2=new BankAccount(500.00,200.55);
         BankAccount userAcount3=new BankAccount(700.00,1500.14);
         System.out.println(BankAccount.getTotalMoney());
        userAcount2.depositchecking(122.55);
        System.out.println(userAcount2.getCheckingBalance());
        userAcount2.withdrawchecking(40.5);
        System.out.println(userAcount2.getCheckingBalance());
        userAcount2.withdrawchecking(1000.5);
        System.out.println(userAcount2.getCheckingBalance());

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney

        // Static Test (print the number of bank accounts and the totalMoney)

    }
}
