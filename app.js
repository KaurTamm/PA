// Muutujad

// var, let, const
// var
var nimi = 'Kaur'; // Defineerimine
console.log(nimi);
nimi = 'Tamm'; // Väärtuse omistamine
console.log(nimi);

// Muutujate initsialiseerimine
var tervitus;
console.log(tervitus);
tervitus = 'Tere!';
console.log(tervitus);

// Liitnimede kasutamine
var eesNimi = 'Kaur'; // Camel style
var ees_nimi = 'Kaur'; // PHP style
var EesNimi = 'Kaur'; // Pascal style

// let
let pereNimi = 'Tamm';
console.log(nimi);
pereNimi = '???';
console.log(pereNimi);

//const
const minuEesNimi = 'Kaur';
console.log(minuEesNimi);

const inimene = {nimi : 'Kaur', vanus : 24};
console.table(inimene);
inimene.vanus = 25;
console.table(inimene);

const arvud = [1, 2, 3, 4, 5];
console.log(arvud);
arvud.push(6);
console.log(arvud);