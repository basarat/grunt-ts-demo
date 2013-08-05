/// <reference path="./Animal.ts"/>

class Human extends Animal{
    constructor(){
        super('pizza');
    }

    speak(){
        console.log('A human spoke');
        super.speak();
    }
}