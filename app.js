//if/else statement
let pincode = 12345;

if (pincode == 12345){
    console.log('Sisenesid pangaautomaati');
} else{
    console.log('Vale parool! Ligipääs keelatud!');
}

let vastus = '0' + '0' + '7';

if (vastus == '007'){
    console.log('On võrdsed!');
} else{
    console.log('Ei ole võrdsed!')
}

//Suur/väike täht
let sisestatudV2ike = 'TEST';
console.log(sisestatudV2ike.toLowerCase());

let sisestatudSuur = 'test';
console.log(sisestatudSuur.toUpperCase());

//Arvude võrdlemine
let vanus = 24
if (vanus < 14){
    console.log('Oled natuke noor edasipääsuks');
} else{
    console.log('Sisenesid võlumaailma');
}

let arvutus = 2 + 2 * 3
if (arvutus == 12){
    console.log('On võrdsed!');
} else{
    console.log('Ei ole võrdsed!');
}

//Tingimuslause tingimuslauses

let kontoseis = 100;
let sisestatudPin = 12345;

if (sisestatudPin == 12345){
    console.log('Sisenesid pangaautomaati! Pangakontol on ' + kontoseis + ' eurot.');
    console.log('Sisesta mitu eurot soovid välja võtta: 42');
    let soovitudRaha = 42;
    if (soovitudRaha <= kontoseis){
        kontoseis = kontoseis - soovitudRaha
        console.log('Raha välja võetud: ' + soovitudRaha + ' eurot');
    } else{
        console.log('Kontol ei ole piisavalt raha!');
    }
    console.log('Pangakontol on järgi ' + kontoseis + ' eurot.');
} else{
    console.log('Vale parool! Ligipääs keelatud!');
}

const a = 1
const b = 2
if (a > b){
    if (a == 1){
        console.log(a);
    } else{
        console.log(b);
    }
} else{
    console.log('Olen siin')
}

// and &&
let kood1 = '1234'
let kood2 = '0000'

if (kood1 == '1234' && kood2 == '0001'){
    console.log('Seif avaneb!');
} else{
    console.log('Salakoodidega on kehvasti. Tõstke käed üles!');
}

//or ||
if (kood1 == '1234' || kood2 == '0001'){
    console.log('Seif avaneb!');
} else{
    console.log('Salakoodidega on kehvasti. Tõstke käed üles!');
}

// not !=
let arv = 1
if (arv != 1){
    console.log('True');
} else{
    console.log('False');
}

//Tingimus tõeväärtustega
let kartulOlemas = true 
let makaronOlemas = false
let salatikasteOlemas = true 
if ((kartulOlemas || makaronOlemas == true) && salatikasteOlemas == true){
    console.log('Saab salatit teha');
} else{
    console.log('Ei saa salatit teha');
}

//else if
let punktid = 90

if (punktid > 90){
    console.log('Hinne A');
} else if (punktid > 80){
    console.log('Hinne B');
} else if (punktid > 70){
    console.log('Hinne C');
} else if (punktid > 60){
    console.log('Hinne D');
} else if (punktid > 50){
    console.log('Hinnne E');
} else{
    console.log('Hinne F');
}

//Juhuslik arv
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let kasutajaValik = 1

if (getRandomInt(1, 2) == 1){
    console.log('Kull');
} else{
    console.log('Kiri');
}


//switch
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(day);
    break;
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
     day = "Tuesday";
     console.log(day);
    break;
  case 3:
    day = "Wednesday";
    console.log(day);
    break;
  case 4:
    day = "Thursday";
    console.log(day);
    break;
  case 5:
    day = "Friday";
    console.log(day);
    break;
  case 6:
    day = "Saturday";
    console.log(day);
}