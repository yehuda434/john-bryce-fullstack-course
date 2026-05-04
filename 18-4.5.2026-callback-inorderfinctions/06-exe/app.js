function greet(name1, callback){
    console.log(`Hello, ${name1}!`);
    callback();
}

function calculate(){
    console.log("i am callback");
}

greet("John", calculate);


greet("Jane", function(){
    console.log("i am anonymous callback");
});


greet("Jane", ()=>{
    console.log("i am anonymous callback");
});

// function (){
//     return callback(a, b);
// }



