players = [
    {
    	"name": "Kevin Durant", 
    	"age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Jason Tatum", 
    	"age":24, 
    	"position": "small forward", 
    	"team": "Boston Celtics"
    },
    {
    	"name": "Kyrie Irving", 
    	"age":32,
        "position": "Point Guard", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Damian Lillard", 
    	"age":33,
        "position": "Point Guard", 
    	"team": "Portland Trailblazers"
    },
    {
    	"name": "Joel Embiid", 
    	"age":32,
        "position": "Power Foward", 
    	"team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]



kevin = {
    	"name": "Kevin Durant", 
    	"age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
}
jason = {
    	"name": "Jason Tatum", 
    	"age":24, 
    	"position": "small forward", 
    	"team": "Boston Celtics"
}
kyrie = {
    	"name": "Kyrie Irving", 
    	"age":32,
        "position": "Point Guard", 
    	"team": "Brooklyn Nets"
}
    
# Create your Player instances here!
# player_jason = ???





class Player:
    
    list_player=[]
    
    def __init__(self, yamna):
        self.name = yamna['name']
        self.age = yamna['age']
        self.position =yamna['position']
        self.team = yamna['team']
        Player.list_player.append(self)
        
    @classmethod

    def get_team(cls,list_dic):
            new_teams=[]
            for index in list_dic:
              new_teams.append(cls(index))
              
            return new_teams
    
Player.get_team(Player,players)
  



        
    

player_jason=Player(jason)
player_kevin=Player(kevin)

# print(player_jason.name)

# ... (class definition and large list of players here)
# new_team = []
# # Write your for loop here to populate the new_team variable with Player objects.
    


# for index in players:
#     new_team.append(Player(index))

# for i in range(len(new_team)):

#     print(new_team[i].name)