let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    textSize(20); 
     for (let i = 0; i < pokemons.length; i++){
    text(pokemons[i], 20, i * 45);
}
    yPos = 100;
}