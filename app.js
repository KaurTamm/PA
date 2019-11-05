// function

function pindala(pikkus, laius){
    let pindala = pikkus * laius;
    return pindala;
}

function valjasta(pikkus, laius){
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    let vastus = pindala(pikkus, laius);
    console.log('Pindala = ' + vastus);
}

valjasta(5, 5);