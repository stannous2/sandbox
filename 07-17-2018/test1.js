///constructor

function Animal (name, raining, noise){
    this.name = name;
    this.raining = raining;
    this.noise = noise;

    this.makeNoise = function(){
        if(this.raining === true){
            console.log(this.noise);
        }
    }
}

//creat an object and sets it to dogs
const dog = new Animal('dog', true,'woof!');
const cat = new Animal('cat', false, 'meow');

//calling
dog.makeNoise();
cat.raining === true;
cat.makeNoise();




// let dog = { 
//     raining: true, 
//     noise: 'Woof!', 
//     makenoise: function() {
//         if(this.raining === true)
//             console.log(this.noise)}
//     }

// let cat = { 
//     raining: false, 
//     noise: "Meow!", 
//     makenoise: function(){
//         if(this.raining === false){
//             console.log(this.noise)
//         }
//     }
// };

