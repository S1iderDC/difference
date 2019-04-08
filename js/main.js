
let a = parseInt(prompt('Введите A :'));
let b = parseInt(prompt('Введите B :'));
let c;



if (a>=0 && b>=0) {
    c = a - b;

    if (a<0 && b<0 ) {
        c = a * b;


    }
}
else {
        c = a + b;
}

alert(`c = ${c}`);



