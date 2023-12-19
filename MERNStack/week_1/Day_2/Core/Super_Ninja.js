class Ninja {
    constructor(name,health,speed,strength){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
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
    }}


class Sensei extends Ninja {
        constructor(name,health=200,speed=10,strength=10) {
          super(name,health,speed,strength);
          this.wisdom=10;


        }
        speakWisdom() {
            const message = super.drinkSake();
            //console.log(message)
            ;
        return this}
        }
const superSensei = new Sensei("Master Splinter");



superSensei.speakWisdom().showStats();