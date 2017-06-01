"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Animal = function () {
    function Animal() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "The animal";
        var howMoved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "moved";
        var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "feet";
        var sound = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "nothing";

        _classCallCheck(this, Animal);

        this.name = name;
        this.howMoved = howMoved;
        this.distance = distance;
        this.unit = unit;
        this.sound = sound;
    }
    // Default: The animal moved 0 feet.


    _createClass(Animal, [{
        key: "move",
        value: function move() {
            return this.name + " " + this.howMoved + " " + this.distance + " " + this.unit + ".";
        }
        // Default: The animal says nothing.

    }, {
        key: "makeSound",
        value: function makeSound() {
            return this.name + " says " + this.sound + ".";
        }
    }]);

    return Animal;
}();
// Demonstrate output from base class Animal


var kitty = new Animal();
kitty.name = "Kitty Cat";
kitty.sound = '"meow"';
kitty.howMoved = "scampered";
kitty.distance = 35;
console.log(kitty);
console.log(kitty.move());
console.log(kitty.makeSound());

// Create 4 more class which will extend Animal class

// 1st extension, change defaults, add isPoisonous, modify makeSound()

var Snake = function (_Animal) {
    _inherits(Snake, _Animal);

    // Change base class defaults
    function Snake() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "The snake";
        var howMoved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "slithered";
        var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 57;
        var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "feet";
        var sound = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '"sssss"';
        var isPoisonous = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

        _classCallCheck(this, Snake);

        var _this = _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this, name, howMoved, distance, unit, sound));
        // Use super to refer to base class properties before using this


        _this.name = name;
        _this.howMoved = howMoved;
        _this.distance = distance;
        _this.unit = unit;
        _this.sound = sound;
        _this.isPoisonous = isPoisonous;
        return _this;
    }
    // Extend base class method by adding "with its forked tongue"


    _createClass(Snake, [{
        key: "makeSound",
        value: function makeSound() {
            return "With its forked tongue, " + _get(Snake.prototype.__proto__ || Object.getPrototypeOf(Snake.prototype), "makeSound", this).call(this);
        }
        // Extend base class by adding new method

    }, {
        key: "poisonMsg",
        value: function poisonMsg() {
            return "True or false: " + this.name + " is poisonous? " + this.isPoisonous;
        }
    }]);

    return Snake;
}(Animal);

// Demonstrate output from extended class Snake


console.log("\n*********************************************************");

var sheldon = new Snake(); // Create new instance
sheldon.name = "Sheldon the Snake"; // Override default
sheldon.isPoisonous = true; // Override default
console.log(sheldon); // Display all properties and methods
console.log(sheldon.move()); // Sheldon the Snake slithered 57 feet.
console.log(sheldon.makeSound()); // With its forked tongue ... says sssss.
console.log(sheldon.poisonMsg()); // ... is poisonous? true

// 2st extension, change defaults, pounceDistance,, modify makeSound()

var Tiger = function (_Animal2) {
    _inherits(Tiger, _Animal2);

    // Change base class defaults
    function Tiger() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "The tiger";
        var howMoved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ran";
        var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 9;
        var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "miles";
        var sound = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '"ROAR"';
        var pounceDistance = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "7 feet";

        _classCallCheck(this, Tiger);

        var _this2 = _possibleConstructorReturn(this, (Tiger.__proto__ || Object.getPrototypeOf(Tiger)).call(this, name, howMoved, distance, unit, sound));
        // Use super to refer to base class properties before using this


        _this2.name = name;
        _this2.howMoved = howMoved;
        _this2.distance = distance;
        _this2.unit = unit;
        _this2.sound = sound;
        _this2.pounceDistance = pounceDistance;
        return _this2;
    }

    // Extend base class by adding new method


    _createClass(Tiger, [{
        key: "pounceMsg",
        value: function pounceMsg() {
            return "This tiger can pounce a distance of " + this.pounceDistance + ".";
        }
    }]);

    return Tiger;
}(Animal);

// Demonstrate output from extended class Tiger


console.log("\n*********************************************************");

var tamara = new Tiger();
tamara.name = "Tamara the Tiger"; // override default
tamara.distance = 12; // override default
tamara.pounceDistance = "9 feet"; // override default
console.log(tamara); // show all properties and methods
console.log(tamara.move()); // Tamara the Tiger ran 12 miles
console.log(tamara.makeSound()); // Tamara the Tiger says roar
console.log(tamara.pounceMsg()); // ... can pounce a distance of 9 feet

// 3rd extension, change defaults, add canFly, modify makeSound()

var FantasyAnimal = function (_Animal3) {
    _inherits(FantasyAnimal, _Animal3);

    // Change base class name default, add new canFly property with default value
    function FantasyAnimal() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "This fantasy animal";
        var howMoved = arguments[1];
        var distance = arguments[2];
        var unit = arguments[3];
        var sound = arguments[4];
        var canFly = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

        _classCallCheck(this, FantasyAnimal);

        var _this3 = _possibleConstructorReturn(this, (FantasyAnimal.__proto__ || Object.getPrototypeOf(FantasyAnimal)).call(this, name, howMoved, distance, unit, sound));
        // Use super to refer to base class properties before using this


        _this3.name = name;
        _this3.canFly = canFly;
        return _this3;
    }
    // Extend base class by adding new method


    _createClass(FantasyAnimal, [{
        key: "flyMsg",
        value: function flyMsg() {
            return "True or false: " + this.name + " can fly? " + this.canFly;
        }
    }]);

    return FantasyAnimal;
}(Animal);

// Demonstrate output from extended class Fantasy Animal


console.log("\n*********************************************************");

var allegra = new FantasyAnimal(); // Create new instance
allegra.name = "Allegra the Unicorn"; // Override some default properties
allegra.canFly = true;
allegra.howMoved = "flew";
allegra.distance = 50;
allegra.unit = "miles";
console.log(allegra); // Display all properties and methods
console.log(allegra.move()); // Allegra the Unicorn flew 50 miles.
console.log(allegra.makeSound()); // Allegra the Unicorn says nothing.
console.log(allegra.flyMsg()); // ... can fly? true


// 4th extension, keep defaults, add isHousePet, and housePetMsg()

var Turtle = function (_Animal4) {
    _inherits(Turtle, _Animal4);

    // Change only one base class default
    function Turtle() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "This turtle";
        var howMoved = arguments[1];
        var distance = arguments[2];
        var unit = arguments[3];
        var sound = arguments[4];
        var isHousePet = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

        _classCallCheck(this, Turtle);

        var _this4 = _possibleConstructorReturn(this, (Turtle.__proto__ || Object.getPrototypeOf(Turtle)).call(this, name, howMoved, distance, unit, sound));
        // Use super to refer to base class properties before using this


        _this4.name = name;
        _this4.isHousePet = isHousePet;
        return _this4;
    }
    // Extend base class by adding new method


    _createClass(Turtle, [{
        key: "housePetMsg",
        value: function housePetMsg() {
            return "True or false: " + this.name + " is a house pet? " + this.isHousePet;
        }
    }]);

    return Turtle;
}(Animal);

// Demonstrate output from extended class Turtle


console.log("\n*********************************************************");

var tabitha = new Turtle(); // Create new instance
tabitha.name = "Tabitha the Turtle"; // Override one default propert
console.log(tabitha); // Display all properties and methods
console.log(tabitha.move()); // Tabitha the Turtle moved 0 feet.
console.log(tabitha.makeSound()); // Tabitha the Turtle says nothing.
console.log(tabitha.housePetMsg()); // ... is a house pet? true