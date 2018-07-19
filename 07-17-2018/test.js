let dog = { 
    raining: true, 
    noise: 'Woof!', 
    makenoise: function() {
        if(this.raining === true)
            console.log(this.noise)}
    }

let cat = { 
    raining: false, 
    noise: "Meow!", 
    makenoise: function(){
        if(this.raining === false){
            console.log(this.noise)
        }
    }
};

