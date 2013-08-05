/// <reference path="./Animal.ts"/>

class Cow extends Animal{
    constructor(){
        super('grass');
    }

    speak(){
        console.log('Cow mooed');
        super.speak();
    }
}