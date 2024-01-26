public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
public BankAccount(){

}
public BankAccount(double checkingBalance,double savingsBalance){
    this.checkingBalance=checkingBalance;
    this.savingsBalance=savingsBalance;
    accounts++;
    totalMoney += this.checkingBalance+this.savingsBalance;
}




    // GETTERS
    // for checking, savings, accounts, and totalMoney


    public double getCheckingBalance() {
        return this.checkingBalance;
    }
    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    
    public double getSavingsBalance() {
        return this.savingsBalance;
    }
    public void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }

    public static double getTotalMoney(){
        return BankAccount.totalMoney;
    }
    public static void setTotalMoney(double totalMoney){
        BankAccount.totalMoney=totalMoney;
    }


    public static int getAcounts(){
        return BankAccount.accounts;
    }
    public static void setAcounts(int accounts){
        BankAccount.accounts=accounts;
    }




    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    // withdraw 
    public void depositchecking(double value){
        this.checkingBalance+=value;

    }

     public void depositsaving(double value){
        this.savingsBalance+=value;

    }

    public void withdrawchecking(double money){
        if(this.checkingBalance>=money){
             this.checkingBalance-=money;
        }
        else{
            System.out.println("solde insufisants");
        }
       

    }
     public void withdrawsaving(double money){
        if(this.savingsBalance>=money){
         this.savingsBalance-=money;
        }
        else{
            System.out.println("solde insufisants");
        }
        

     }


    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    // - display total balance for checking and savings of a particular bank account
}
