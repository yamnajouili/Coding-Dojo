from ninjas import Ninja

class Pet:
    def __init__(self,name,type,tricks,health,energy):

        self.name=name
        self.type=type
        self.tricks=tricks
        self.health=health
        self.energy=energy

    def sleep(self):
        self.energy+=25
    def eat(self):
        self.energy+=5
        self.health+=10
    def play(self):
        self.health+=5
    def noise(self):
        print(f'sound of{self.name}')
        if(self.type=='dog'):
            print(f"{self.name} barks:Woof! Woof!")
        else:
            print(f"sound of {self.name}")
        return  None

class Dog(Pet):
    def __init__(self, name, type, tricks, health, energy,age):
        super().__init__(name, type, tricks, health, energy)
        self.age=age
cat=Pet('KiKi','cat','fast_moves',10,100)
naruto=Ninja('naruto','ozomaki','sushi','fish',cat)

naruto.walk().feed().bathe()
dog=Dog("rex","dog","kind",20,100,2)
dog.noise()
dog.play()
dog.eat()
