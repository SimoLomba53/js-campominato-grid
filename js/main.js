//UTENTE CLICK BUTTON
//BUTTON GENERA UNA GRIGLIA QUADRATA
//OGNI CELLA HA UN NUMERO DA 1 a 100 in maniera progressiva
//OGNI CELLA QUANDO VIENE CLICKATA EMETTE IL NUMERO DELLA CELLA IN CONSOLE
debugger;

//COLLEGO BUTTON ALL'HTML
const generateButton=document.getElementById("genera");
console.log(generateButton);
//COLLEGA JAVASCRIPT AL DIV HTML
const grid=document.getElementById("grid");
//console.log(grid);
//CREA UNA FUNZIONE E MOLTIPLICA X 100 I QUADRATI
multicell(grid);


function multicell(grid){
    for(let i=0;i < 100;i++){
        //CREO IL QUADRATO DA INSERIRE
        const square=document.createElement("div");
        //GLI DO LA CLASSE
        square.classList.add("size");
        // LO INTRODUCO NEL GRID
        grid.append(square);
    }

   


}
