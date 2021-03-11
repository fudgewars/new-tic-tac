let app = document.getElementById("app");

//player array
let players = [];

//Tile class
class Tile {
    constructor(id, tileHTML) {
        this.id = id;
        this.mark = '';
        this.clicked = false;
        this.tileHTML = tileHTML;
    }

}


//Board class
class Board{
    constructor() {
        this.turnCount = 0;
        this.tileArray = [];
        this.winner = '';
    }
    generateBoard() {
        const container = document.createElement("div");
        container.className = "container mt-5 justify-content-center";
        
        let header = document.createElement("div");
        header.className = "row mt-5 justify-content-center";
        header.innerHTML = "Tic Tac Toe";

        const row = document.createElement("div");
        row.className = "row";

        for (let i = 0; i<9; i++) {
            const col = document.createElement("div");
            col.className = "col-4 border border-secondary p4";
            col.setAttribute('id', i);
            const tileObject = new Tile(i, col);
            col.addEventListener('click', this.clickTile.bind(this,tileObject));
            row.appendChild(col);
            this.tileArray.push(tileObject);
        }
        container.appendChild(header);
        container.appendChild(row);
        app.appendChild(container);
    }

    clickTile(obj){
        obj.clicked = true;
        obj.tileHTML.innerText = "X"
        console.log("whatever", obj);
        console.log(this.tileArray);
    }

}
















function init(){
    let tictactoe = new Board();
    console.log(tictactoe);
    tictactoe.generateBoard();
}

init();

/* const (app = document . getElementById)("app");
const text = document.createTextNode("Hello, World!");
const element = document.createElement("div");

app.appendChild(element);
app.appendChild(text);

console.log(app);

let board = 

//innerText = 
//innerHTML =  */

//Okay, here we go.
//first, get the first 

//const app = document.getElementById("app");

// show title tic tac toe

// x goes first

// show "X's Turn" first, then, if 


/** 
         Method	                        Description
document.createElement(element)	    Create an HTML element tag
document.removeChild(element)	    Remove an HTML element
document.appendChild(element)	    Add an HTML element
document.replaceChild(new, old)	    Replace an HTML element
document.write(text)	            Write into the HTML output stream 
doc.classList.add("a","b")              add multiple classes
doc.className.add("d")                     add one class

*/

//try to set html in js
//could make it a function if i werent already drowning
 

// app.className.add("container");
/* const ticTacTitle = document.createElement("div");
const pl1 = document.createElement("div");
const pl2 = document.createElement("div");
const turnMessage = document.createElement("div");
const gridRow = document.createElement("div");
const gridCol = document.createElement("div");
const btnRow = document.createElement("div");
const btnTag = document.createElement("button"); */


//add and append all the class names to the element tags
//appendin the children to the parents

/*
app.appendChild 
*/
