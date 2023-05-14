//1 print odds 1-20

for(var i = 0; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

//2 decresing multiples of 3

for(var i = 100; i>=0; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

//3 print the sequence

for(var i = 4; i >= -3.5;){
    console.log(i);
    i= i - 1.5;
}

//4 sigma

var sum = 0;
for(var i = 0; i <= 100; i++){
    sum = i + sum;
}
console.log(sum)

//5 fractoial

var product = 1;
for( var i = 1; i <= 12; i++){
    product = i * product;
}
console.log(product);