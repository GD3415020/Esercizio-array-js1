let arrayCasuale = [4, 54, 554, 3, -23, -50, 7, 78, 66, -400];

console.log(arrayCasuale);



// ordine decrescente

let arrayDecresc = arrayCasuale.sort(function (a, b) {
    return b - a;
});

console.log(arrayDecresc);



// ordine crescente

let arrayCresc = arrayCasuale.sort(function (a, b) {
    return a - b;
});

console.log(arrayCresc);

