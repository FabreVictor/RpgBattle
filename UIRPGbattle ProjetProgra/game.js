import { RPGCharacter } from './character.js';

// Objectif 1 : 
//  - w/h du type monstres différent du type hero
//  - positionner le monstres à droite et les heros à gauche verticalement
//  - changer la couleur des monstres
//  - mettre une couleur de fond sur le canvas

// Defines characters and monsters here !!!
const NBCHAR = 4;
const NBMONSTERS = 3;
const CHAR_START_X = 400;
const MONSTER_START_X = 60;
const CHAR_COLOR_ARRAY = ["green", "red", "blue", "yellow", "orange"];
const HEROES_NAME = ["jojo", "kiki", "mimi", "pipo"]
const CHAR_MANA = [13, 16, 18, 4];
const COLONNE = { heroes: 500, monsters: 50 };
// Code 
class RPGGame {

    /*----------------------------------------------*/
    static init() {

        this.nbChars = NBCHAR;
        this.nbMonsters = NBMONSTERS;

        this.chars = [];
        this.monsters = [];
        for (let i = 0; i < this.nbChars; i++) {
            this.chars[i] = new RPGCharacter(); //
            this.chars[i].init("hero", COLONNE.heroes, 10 + (60 * i), 10 + i, CHAR_MANA[i]);
            this.chars[i].setColor(CHAR_COLOR_ARRAY[1, 3]);
            this.chars[i].setName(HEROES_NAME[i]);
        }
        for (let i = 0; i < this.nbMonsters; i++) {
            this.monsters[i] = new RPGCharacter(); //
            this.monsters[i].init("monster", COLONNE.monsters, 10 + (70 * i), 10 + i, 10 + i);
            this.monsters[i].setColor(CHAR_COLOR_ARRAY[0]);
            this.monsters[i].setName("Monstre " + (i + 1));
        }


        this.canvas = document.querySelector('canvas');

        const canvas = document.querySelector('canvas')
        canvas.addEventListener('mousedown', function(e) {
            RPGGame.getCursorPosition(canvas, e)
        })
    }

    /*----------------------------------------------*/
    static getCursorPosition(canvas, e) {
        const elementRelativeX = e.offsetX;
        const elementRelativeY = e.offsetY;
        const x = elementRelativeX * canvas.width / canvas.clientWidth;
        const y = elementRelativeY * canvas.height / canvas.clientHeight;
        for (let char of RPGGame.chars) {
            let rect = char.getCoord();
            //console.log(rect, x, y);
            if ((x >= rect.x && x <= (rect.x + rect.w)) &&
                (y >= rect.y && y <= (rect.y + rect.h))) {
                //console.log(char.getName())
                let box = document.querySelector('#charbox')
                box.style.display = "block";
                box.style.left = rect.x + rect.w + 4;
                box.style.top = rect.y;
                let label = box.querySelector('#charname');
                label.innerHTML = char.getName();
                label = box.querySelector('#mana');
                label.innerHTML = char.getMana();
                label = box.querySelector('#health');
                label.innerHTML = char.getHealth();
                console.log(box)
                box = document.querySelector('#action')
                box.style.display = "block";
                box.style.left = rect.x + rect.w + 4;
                box.style.top = rect.y;
            }
        }
        //console.log("x: " + x + " y: " + y)
    }

    /*----------------------------------------------*/
    static run() {

        let ctx = RPGGame.canvas.getContext('2d');
        ctx.clearRect(0, 0, RPGGame.canvas.width, RPGGame.canvas.height);

        // Draw characters
        for (let char of RPGGame.chars) {
            ctx.fillStyle = char.getColor();
            //char.randomAnimate();
            let rect = char.getCoord();
            ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        }
        for (let monster of RPGGame.monsters) {
            ctx.fillStyle = monster.getColor();
            //char.randomAnimate();
            let rect = monster.getCoord();
            ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        }
    }
}

/*----------------------------------------------*/
console.log("LOADED !!!!");
RPGGame.init();
setInterval(RPGGame.run, 100);