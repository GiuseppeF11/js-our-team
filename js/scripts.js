// JS OUR TEAM

console.log('Js-Our-Team');

//MILESTONE 1

//Creo array
const team = [];

//Creo gli oggetti dell'array
const sherek = {
    nome: 'Sherek',
    ruolo: 'Orco',
    foto: 'immagine',
};

const mrBean = {
    nome: 'Mr. Bean',
    ruolo: 'Impiegato',
    foto: 'immagine',
};

const mrPotato = {
    nome: 'Mr. Potato',
    ruolo: 'patata',
    foto: 'immagine',
};

//Pusho gli oggetti dentro l'array
team.push(sherek,mrBean,mrPotato);


//MILESTONE 1
console.log(team);

for (let i = 0; i < team.length; i++) {
    console.log('-', team[i]);
    for (let key in team[i]) {
        console.log('CHIAVE: ' + key + ':', team[i][key]);
    }
}

