//Tsüklid

let numbrid = [];

for(let i = 0;  i < 10; i++){
    let arv = Math.floor(Math.random() * 10);
    numbrid.push(arv);
}
console.log(numbrid);

for(let kord = 0; kord < numbrid.length; kord++){
    for(let i = 0; i < numbrid.length; i++){
        let abi;
        if(numbrid[i] < numbrid[i+1]){
            abi = numbrid[i];
            numbrid[i] = numbrid[i+1];
            numbrid[i+1] = abi;
        }
    }
}
console.log(numbrid)