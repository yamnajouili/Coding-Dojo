class BankAccount:
    bank_name = "ATB"
    all_accounts = []

    def __init__(self, nameC):
        self.nameC = nameC
        self.int_rate = 0.01
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
        print("=======================")

        return self

    def yield_interest(self):
        self.balance -= self.balance * self.int_rate
        return self
    


    @classmethod
    def all_instance(BankAccount):
      print(f"all acount are:{BankAccount.all_accounts}")


BankAccount.all_instance()




account1 = BankAccount("chaker")
account2 = BankAccount("karim")
# countbanck1.display_account_info()

print(account1)
print(account2)
account1.deposit(2000).deposit(2000).deposit(2000).withdraw(2500).yield_interest().display_account_info()