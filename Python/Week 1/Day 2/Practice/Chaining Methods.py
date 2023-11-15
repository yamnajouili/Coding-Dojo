class user:
    def __init__(self,name,last,email,age):
        self.first_name=name
        self.last_name=last
        self.email=email
        self.age=age
        self.gold_card_points =0 
        self.is_rewards_member =False


    def display_info(self) :
        
            print("====================")
            print(f"First_name:{self.first_name}")
            print(f"Last_name:{self.last_name}")
            print(f"Eamil:{self.email}")
            print(f"Age:{self.age}")
            print(f"point:{self.gold_card_points}")
            print(f"Rewards_menber:{self.is_rewards_member}")
            print("========================")

            return self

            



    def enroll(self) :
        self.is_rewards_member=True
        self.gold_card_points=200
        return self

    def spend_points(self, amount):
        self.gold_card_points-=amount

        return self



            




user1=user("lazher","jouili","lazher.jouli@gmail.com",27)
user2=user("yamna","jouili","yamna.jouili@gmail.com",30)


user1.display_info().enroll().spend_points(100).display_info()
user2.enroll().spend_points(50).display_info()


