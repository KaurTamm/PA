//Tsüklid

//for, continue 
let arv;
let lause;
for(arv =1; arv <= 10; arv++){
    lause = 'Arv = ';
    if(arv < 10){
        lause = lause + ' '
    }
    lause = lause + arv;
    if(arv % 2 == 0){
        lause = lause + ' Paaris';
    } else{
        lause = lause + ' Paaritu';
    }
    console.log(lause);
    if(arv >= 5){
        break;
    }
}