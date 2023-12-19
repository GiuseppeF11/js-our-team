// JS OUR TEAM

console.log('Js-Our-Team');

//MILESTONE 1

//Creo array
const team = [];

//Creo gli oggetti dell'array
const shrek = {
    Nome: 'Shrek',
    Ruolo: 'Orco',
    Foto: 'https://static.sky.it/images/skytg24/it/spettacolo/cinema/2020/08/28/shrek-curiosita-film/Shrek.jpg.transform/hero-mobile-2x/683398ae8c3f9e044c4cdb1ff5a44dc68275e7f0/img.jpg',
};

const mrBean = {
    Nome: 'Mr. Bean',
    Ruolo: 'Impiegato',
    Foto: 'https://static.sky.it/editorialimages/4b98cae8c340817be4f5a426fcefae57d8325b55/skytg24/it/spettacolo/cinema/2021/01/08/mr-bean-cartone-animato/mr-bean.jpg',
};

const mrPotato = {
    Nome: 'Mr. Potato',
    Ruolo: 'patata',
    Foto: 'https://static.wikia.nocookie.net/disney/images/d/dd/IMG_0074.png/revision/latest/thumbnail/width/360/height/360?cb=20190629135602&path-prefix=it',
};

const JohnWick = {
    Nome: 'John Wick',
    Ruolo: 'Sicario',
    Foto: 'https://static.sky.it/editorialimages/19308c1b552ee65ecab81cf34a87c9bf0345d771/skytg24/it/spettacolo/cinema/2023/05/26/john-wick-5/Webphoto_John_Wick_4_068481_07.jpg',
};

const Gogeta = {
    Nome: 'Gogeta',
    Ruolo: 'DevastaTroppofortespaccatutto',
    Foto: 'https://wallpapers.com/images/hd/ssj4-gogeta-charging-attack-duizx1m5zp1wq49v.jpg',
};

//Pusho gli oggetti dentro l'array
team.push(shrek,mrBean,mrPotato,JohnWick,Gogeta);


//MILESTONE 1
console.log(team);

let member = document.createElement('div');

for (let i = 0; i < team.length; i++) {
    console.log('-', team[i]);
    //MILESTONE 2
    let member = document.createElement('div');
    document.body.append(member);
    for (let key in team[i]) {
        console.log('CHIAVE: ' + key + ':', team[i][key]);
        

        if(key  === 'Foto') {
            member.innerHTML += `${key}: <img src="${team[i][key]}">`
        } else {
            member.innerHTML += key + ': ' + team[i][key] + '<br>';
        }
    }
}



