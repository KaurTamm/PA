// function

function ristpindala(pikkus, laius){
    let pindala = pikkus * laius;
    return pindala;
}

function valjasta(pikkus = 0, laius = 0){
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    let pindala = ristpindala(pikkus, laius);
    console.log('Pindala = ' + pindala);
}

valjasta(5, 5);
valjasta()