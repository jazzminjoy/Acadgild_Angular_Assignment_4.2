# Acadgild_Angular_Assignment_4.2
Acadgild, Front End Development course, Typescript portion, Assignment 4.2
Student: Michele Cannito

In this assignment, we were to build a base class and then create four sub-classes that extended the base class.
The base class was to have properties name and distance, and method makeSound().
I added properties howMoved, unit, and sound, and method move() to the base class so that I could set up a
variety of more challenging extensions.

Snake, Tiger, FantasyAnimal, and Turtle are the sub classes I created by extending the Animal class.

To really get a feel and understanding of how classes can be extended, I did the following:
Changed some default values, added properties, added methods, sometimes used the base class default values,
other times used the sub class default values or overrode them, and so on. 

I appropriately used super and this, and built constructors using only properties with default
values different from the base class and/or with new properties.

Afterwards, I logged the properties of each class and executed the methods each class had.

IMPORTANT: There is a lot of output. To see it all, enter the following command:
node assign4.2.js | MORE

REVIEWER:  Read the .ts file. It is well-documented. The .js file is just the .ts file transpiled.

The following is the text of the original assignment from Acadgild:
"Create a Class Animal, which is Base class should have name, distance covered by
and behavior of that animal:
Class Animal {name: string; move(distance) {}; makeSound() {} ...}
Then create 4 more class which will extend Animal class with its property and
behavior. For example:
Class Tiger extends Animal {...}"

