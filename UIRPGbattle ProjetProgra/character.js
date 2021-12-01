export class RPGCharacter {
    mana = 0;
    health = 0;
    x = 40;
    y = 50;
    w = 40;
    h = 40;
    color = 'white';
    type = "NONE"
    name = 'Unknown'

    constructor() {

    }

    init(type, x, y, health = 10, mana = 10) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.health = health;
        this.mana = mana;
    }

    setName(name = 'Unknown') {
        this.name = name
    }
    getName() {
        return this.name
    }

    setColor(color = 'white') {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    getCoord() {
        // TODO !!!
        return { x: this.x, y: this.y, w: this.w, h: this.h }
    }
    getType() {
        return this.type;
    }
    getMana() {
        return this.mana;
    }
    getHealth() {
        return this.health;
    }

    //randomAnimate() {
    //this.x = this.x + Math.floor((Math.random() * 100));
    //this.x = this.y + Math.floor((Math.random() * 100));
    //}

    move() {

    }
}