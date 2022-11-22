const pokemonContainer = document.querySelector(".pokemon-container");

function fectpokemon(id){

    fetch('https://pokeapi.co/api/v2/pokemon/${id}/')
    .then((res)=> res.json())
    .then((data) => console.log(data));

}


function fectpokemon(number){

    for(let i=1;i<=number;i++){
        fectpokemon(i);
    }
}

fectpokemon(9);
/*
function createPokemon(pokemon){
    const card=document.createElement('div');
    card.classList.add('pokemon-block');

    const spritecontainer=document.createElement('div');
    spritecontainer.classList.add('img-container');

    const sprite=document.createElement('img');
    sprite.src=pokemon.sprite.front_default

    spritecontainer.appendChild(sprite);

    const number=document.createElement('p');
    number.textContent='#${pokemon.idpokemon.toString().padStart(3,0)}';

    const name=document.createElement('p');
    name.classList.add('name');
    name.textContent=pokemon.name;

    card.appendChild(spritecontainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemoncontenedor.appendChild(card);

}
*/