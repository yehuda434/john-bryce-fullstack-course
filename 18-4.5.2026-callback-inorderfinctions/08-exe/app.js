let arr = [5, 12, 8, 20, 3, 15];
arr.forEach(function(item){
    if(item>10){
    console.log(item);
    }
});

let names = ["dan", "noa", "avi", "lior"];
names.forEach(function(item){
    console.log(item.toUpperCase());
});

let arr2 = [1, 2, 3, 4, 5];

let multuply2 = arr2.map(item=>item*2)
console.log(multuply2);

let power3 = arr2.map(item=>item*item*item)
console.log(poesr3);

let words = ["hello", "js", "react"];
let words2 = words.map(item=>item.length)

let words3 = words.map(item=>{
    return item.length
})


let odd = arr2.filter(item=>item%2!==0)
console.log(odd);

let abobe18 = names.filter(item => item>18)
console.log(abobe18);

let users = [
    { name: "Dan", active: true },
    { name: "Noa", active: false },
    { name: "Avi", active: true }
    ];
    let activeUsers = users.filter(item => item.active)
    console.log(activeUsers);


    let numbers = [1, 2, 3, 4, 5, 6];// 4/ 16 / 36 

let final = numbers.filter(item=>item%2===0).map(item=>item*item);

let products = [
    { name: "Phone", price: 800 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 150 }
    ];
let totla = products
.filter(item=>item.price>100)
.map(item=>item.name);
console.log(totla);


let some = arr.some(item=>item>10);//true
console.log(some);

let every = arr.every(item=>item>10);//false
console.log(every);

let find = arr.find(item=>item>10);//12
console.log(find);

let findIndex = arr.findIndex(item=>item>10);//1
console.log(findIndex);

let findIndex2 = arr.findIndex(item=>item>1000);//-1
console.log(findIndex);

let friend = ["dan", "avi", "noa", "lior", "adam", "yossi"];
let result = friend.find(item=>item.startsWith("a"));
console.log(result);
let result2 = friend.find(item=>item[0]==="a");
console.log(result2);


let bigThanHundred = arr.find(item=>item>100);
console.log(bigThanHundred);

let smallThan0 = arr.findIndex(item=>item<0);
console.log(smallThan0);

let divide5 = arr.findIndex(item=>item%5===0);
console.log(divide5);

let some1 = arr.some(item=>item%2 === 0);
console.log(some1);

let someWords = words.some(item=>item.length>10);
console.log(someWords);

let everyNumberBigThan10 = arr.every(item=>item> 10);
console.log(every1);

let everyStartWithCapital = arr.every(item=>item[0]===item[0].toUpperCase());
console.log(everyStartWithCapital);


let persons = [
    { name: "Dan", age: 25, active: true },
    { name: "Noa", age: 17, active: false },
    { name: "Avi", age: 30, active: true }
   ]
let firstOlderThan18 = persons.find(item=>item.age>18); 
   console.log(firstOlderThan18);

let firstActive = persons.find(item=>item.active);
   console.log(firstActive);

