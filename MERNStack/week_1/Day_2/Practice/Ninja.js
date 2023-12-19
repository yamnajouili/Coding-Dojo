class Ninja {
    constructor(name){
        this.name=name;
        this.health=90;
        this.speed=3;
        this.strength=3;
    }
    sayNinja() {
        console.log(` the Ninja's  ${this.name}`);
        return this
    }
    showStats() {
        console.log(`the ninja's has ${this.strength} and speed is ${this.speed} and healt is ${this.health}`);
        return this
    }
    drinkSake() {
        this.health+=10;
        return this
    }
    

}

const ninja1=new Ninja("naruto");

    ninja1.sayNinja().drinkSake().showStats(); 
    
