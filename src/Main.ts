/// <reference path="./Animal.ts"/>
/// <reference path="./Cow.ts"/>
/// <reference path="./Lion.ts"/>
/// <reference path="./Human.ts"/>

var cow = new Cow();
var lion = new Lion();
var human = new Human();

cow.eat();
cow.speak();
console.log('---------------------------------')

lion.eat();
lion.speak();
console.log('---------------------------------')

human.eat();
human.speak();
console.log('---------------------------------')

