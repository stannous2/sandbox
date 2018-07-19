function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;


    this.printStats = function () {

        console.log(this.name);
        console.log(this.profession);
        console.log(this.gender);
        console.log(this.age);
        console.log(this.strength);
        console.log(this.hitpoints);
        // console.log(this.printStats);

    }
}

let trooper = new Character('zelda', 'gamer', 'female', 15, 100, 500)
let king = new Character('Garnandoph', 'king', 'male', 80, 40, 800);

trooper.printStats();
king.printStats();