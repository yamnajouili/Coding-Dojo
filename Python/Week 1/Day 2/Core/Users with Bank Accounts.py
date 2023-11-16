class BankAccount:
    bank_name = "ATB"
    all_accounts = []

    def __init__(self):
        self.int_rate = 0.02
        self.balance = 0 
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount

        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount

        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self
    def display_account_info(self):
      print("=======================")
      print(f"Balance:{self.balance}$")
      print("===================")
    

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount()
    
    # other methods
    
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    def make_withdraw(self,amount):
        self.account.withdraw(amount)
        return self
    def display_user_acount(self):
        print(f"{self.name} chaking: {self.account.balance} $")
        return self
user1=User("ridha","ridha.jh@gmail.com")


user1.make_deposit(2000).make_withdraw(500).display_user_acount()