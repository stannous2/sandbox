function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function () {
        if (this.hungry === true) {
            console.log('that was yummy....')
            this.hungry = false;
            this.sleepy = true;

        } else
            console.log('no thanks. i\'m full');
    }

    this.sleep = function() {
        if (this.sleepy === true) {
            console.log('zzzzzz.....');
            this.sleepy = false;
            this.bored = true;
            increaseAge();
        } else
            console.log('no way...')
    }

    this.play = function() {
        if (this.bored === true) {
            console.log('Yay...let\'s play!')
            this.bored = false;
            this.hungry = true;
        } else
            console.log('not right now later')
    }

    this.increaseAge = function() {
        this.age++;
        console.log('happy birth to me... I am ' + this.age + ' old');
    }

}

// DigitalPal.prototype.outside = false;
// DigitalPal.prototype.bark() {
//     console.log('woof! woof!');
// }



DigitalPal.prototype.outside = false;
DigitalPal.prototype.bark = function () {
    if (DigitalPal.prototype.outside === true) {
        console.log('woof! woof!');
    }
}

DigitalPal.prototype.goOutSide = function () {
    if (DigitalPal.outside === false) {
        console.log('yay.  i love outdoor')
        DigitalPal.prototype.outside = true;
        DigitalPal.prototype.bark();
    } else {
        console.log('we are already outside')
    }

}
DigitalPal.prototype.goInSide = function () {
    if (DigitalPal.outside === true) {
        console.log('Do we have to? fine')
        DigitalPal.prototype.outside = false;

    } else {
        console.log('i am already inside')
    }

}

let cat = new DigitalPal(true, false, true, 5);

DigitalPal.prototype.houseCondition = 100;
DigitalPal.prototype.meow = function () {
    if (DigitalPal.prototype.outside === true) {
        console.log('meow meow...')

    }
}
DigitalPal.prototype.destroyFurniture = function () {
    if (DigitalPal.prototype.houseCondition > 0) {
        DigitalPal.prototype.houseCondition -= 10;
        console.log('Muahaaaaaahahahhah ')
        this.bored = false;
        this.sleepy = true;
    }
}

DigitalPal.prototype.buyNewFurniture = function () {
    DigitalPal.prototype.houseCondition += 50;
    console.log('are you sure?')
    }

    let dog = new DigitalPal(true, false, true, 2);

    if(process.argv[2] === 'play') {
        dog.play();
    }
    if(process.argv[2] === 'feed') {
        dog.feed();
    }
    if(process.argv[2] === 'goOutSide') {
        dog.goOutSide();
    }