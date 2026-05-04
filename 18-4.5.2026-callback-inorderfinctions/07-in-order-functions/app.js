let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}
function f(item){
    if(item % 2 === 0){
        console.log(item);
    }
}
//forEach is a function that takes a function as a parameter and calls it for each item in the array
arr.forEach(function(item){
    console.log(item);
});

arr.forEach(f);

//mapping is a function that takes a function as a parameter and returns a new array with the results of the function

let poweres = [] 
for(let i = 0; i < arr.length; i++){
    poweres.push(arr[i] * arr[i]);
}
console.log(poweres);//1,4,9,16,25


let poweres2 = arr.map(function(item){
    return item * item;
});

let poweres3 = arr.map(item => item * item);
console.log(poweres3);//1,4,9,16,25

let evens = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(evens);//2,4

let evens2 = arr.filter(item =>  item % 2 === 0);
console.log(evens2);//2,4

let evens3 = arr.filter(item => item % 2 === 0);
console.log(evens3);//2,4
