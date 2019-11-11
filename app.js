// Scope

// Global
var  a = 1;
let b = 2;
const c = 3;

//Block
if(true){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Plokk: ', a, b, c);
}

for(var a = 0; a < 10; a++){
    console.log('Tsükkel: ', a);
}


console.log('Globaalne: ', a, b, c)