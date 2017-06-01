/*
Acadgild Front End Web Development, Assignment 4.2
Student: Michele Cannito

IMPORTANT:
To RUN and REVIEW OUTPUT,
Type this on the command line: node assign4.2.js | MORE

REVIEW CODE in the .ts file. 
The .js file is just transpiler generated code.

Assignment Directions Quoted from Acadgild:
"Create a Class Animal, which is Base class should have name, 
distance covered by and behavior of that animal:
Class Animal {name: string; move(distance) {}; makeSound() {} ...}
Then create 4 more class which will extend Animal class 
with its property and behavior. For example:
Class Tiger extends Animal {...}"

NOTE:
Normal coding would have each class in a separte file and use import.
*/

// Create Class Animal which has 5 properties and 
// 2 methods: move() and makeSound() 
class Animal {
    constructor(name: string = "The animal", 
                howMoved: string = "moved" ,
                distance: number = 0,
                unit: string = "feet",
                sound: string = "nothing") { 
        this.name = name; 
        this.howMoved = howMoved;
        this.distance = distance;
        this.unit = unit;
        this.sound = sound;
    }
    // Default: The animal moved 0 feet.
    move() {
        return( `${ this.name } ${ this.howMoved } ${ this.distance } ${ this.unit }.` );
    }
    // Default: The animal says nothing.
    makeSound() {
        return( `${ this.name } says ${ this.sound }.` );
    }
}
// Demonstrate output from base class Animal
let kitty = new Animal;
kitty.name = "Kitty Cat";
kitty.sound = '"meow"';
kitty.howMoved = "scampered";
kitty.distance = 35;
console.log(kitty);
console.log( kitty.move() );
console.log( kitty.makeSound() );

// Create 4 more class which will extend Animal class

// 1st extension, change defaults, add isPoisonous, modify makeSound()

class Snake extends Animal {
    // Change base class defaults
    constructor(name = "The snake", 
      howMoved = "slithered",
      distance = 57, 
      unit = "feet", // same as base class but included for documentation
      sound = '"sssss"', 
      // Extend base class with new field
      isPoisonous: boolean = false) {
        // Use super to refer to base class properties before using this
        super(name, howMoved, distance, unit, sound);
        this.name = name;
        this.howMoved = howMoved;
        this.distance = distance;
        this.unit = unit;
        this.sound = sound;
        this.isPoisonous = isPoisonous;
    }
    // Extend base class method by adding "with its forked tongue"
    makeSound() {
        return "With its forked tongue, " + super.makeSound();
    }
    // Extend base class by adding new method
    poisonMsg() {
        return("True or false: " + this.name + " is poisonous? " + 
          this.isPoisonous);
    }
 }

// Demonstrate output from extended class Snake
 console.log("\n*********************************************************");
 
 let sheldon = new Snake; // Create new instance
 sheldon.name = "Sheldon the Snake"; // Override default
 sheldon.isPoisonous = true; // Override default
 console.log(sheldon); // Display all properties and methods
 console.log( sheldon.move() ); // Sheldon the Snake slithered 57 feet.
 console.log( sheldon.makeSound() ); // With its forked tongue ... says sssss.
 console.log ( sheldon.poisonMsg() ); // ... is poisonous? true

// 2st extension, change defaults, pounceDistance, modify makeSound()

class Tiger extends Animal {
    // Change base class defaults
    constructor(name = "The tiger", 
      howMoved = "ran",
      distance = 9, 
      unit = "miles", 
      sound = '"ROAR"',
      // Extend base class with new field
      pounceDistance: string = "7 feet") {
        // Use super to refer to base class properties before using this
        super(name, howMoved, distance, unit, sound);
        this.name = name;
        this.howMoved = howMoved;
        this.distance = distance;
        this.unit = unit;
        this.sound = sound;
        this.pounceDistance = pounceDistance;
    }
  
    // Extend base class by adding new method
    pounceMsg() {
        return("This tiger can pounce a distance of " + 
          this.pounceDistance) + ".";
    }
 }

// Demonstrate output from extended class Tiger
 console.log("\n*********************************************************");
 
 let tamara = new Tiger;
 tamara.name = "Tamara the Tiger"; // override default
 tamara.distance = 12;  // override default
 tamara.pounceDistance = "9 feet"; // override default
 console.log(tamara); // show all properties and methods
 console.log( tamara.move() ); // Tamara the Tiger ran 12 miles
 console.log( tamara.makeSound() ); // Tamara the Tiger says roar
 console.log ( tamara.pounceMsg() ); // ... can pounce a distance of 9 feet

 // 3rd extension, change defaults, add canFly, modify makeSound()

class FantasyAnimal extends Animal {
    // Change base class name default, add new canFly property with default value
    constructor(name = "This fantasy animal", 
      howMoved, distance, unit, sound, canFly: boolean = false) {
        // Use super to refer to base class properties before using this
        super(name, howMoved, distance, unit, sound);
        this.name = name;
        this.canFly = canFly;
    }
    // Extend base class by adding new method
    flyMsg() {
        return("True or false: " + this.name + " can fly? " + 
          this.canFly);
    }
 }

// Demonstrate output from extended class Fantasy Animal
 console.log("\n*********************************************************");
 
 let allegra = new FantasyAnimal; // Create new instance
 allegra.name = "Allegra the Unicorn"; // Override some default properties
 allegra.canFly = true; 
 allegra.howMoved = "flew";
 allegra.distance = 50;
 allegra.unit = "miles";
 console.log(allegra); // Display all properties and methods
 console.log( allegra.move() ); // Allegra the Unicorn flew 50 miles.
 console.log( allegra.makeSound() ); // Allegra the Unicorn says nothing.
 console.log ( allegra.flyMsg() ); // ... can fly? true

 
 // 4th extension, keep defaults, add isHousePet, and housePetMsg()

class Turtle extends Animal {
    // Change only one base class default
    constructor(name = "This turtle", 
      howMoved, distance, unit, sound, isHousePet: boolean = true) {
        // Use super to refer to base class properties before using this
        super(name, howMoved, distance, unit, sound);
        this.name = name;
        this.isHousePet = isHousePet;
    }
    // Extend base class by adding new method
    housePetMsg() {
        return("True or false: " + this.name + " is a house pet? " + 
          this.isHousePet);
    }
 }

// Demonstrate output from extended class Turtle
 console.log("\n*********************************************************");
 
 let tabitha = new Turtle; // Create new instance
 tabitha.name = "Tabitha the Turtle"; // Override one default propert
 console.log(tabitha); // Display all properties and methods
 console.log( tabitha.move() ); // Tabitha the Turtle moved 0 feet.
 console.log( tabitha.makeSound() ); // Tabitha the Turtle says nothing.
 console.log ( tabitha.housePetMsg() ); // ... is a house pet? true
