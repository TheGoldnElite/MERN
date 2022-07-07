class Ninja {
    constructor(name,health=10){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }

        sayName() {
            console.log(`Name: ${this.name}`);
            return this;
        }

        showStats(){    
            console.log(`Name: ${this.name}`);
            console.log(`Health: ${this.health}`);
            console.log(`Speed: ${this.speed}`);
            console.log(`Strength: ${this.strength}`);
            return this;
        }

        drinkSake() {
            console.log(`${this.name} drank sake`);
            this.health += 10;
            return this;
        }
};

class Sensei extends Ninja {
    constructor(name,health=200,speed=10,strength=10){
        super(name,health,speed,strength); 
        this.wisdom=10;
        

    }

    speakWisdom(){
        
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
const superSensei = new Sensei("Master Splinter");
ninja1.sayName();
console.log("============");
ninja1.showStats();
console.log("============");
ninja1.drinkSake();
console.log("============");
superSensei.speakWisdom();
console.log("============");
superSensei.showStats();
console.log("============");
ninja1.drinkSake();
ninja1.showStats();
console.log("============");
ninja1.drinkSake();
ninja1.showStats();

