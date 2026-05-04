function greet(name){
    console.log(`Hello, ${name}!`);
}

function processUser(callback){
    let name = prompt("Enter your name");
    callback(name);
}

function police(name){
    console.log(`Hello, ${name}! You are a police officer.`);
}
processUser(greet);

processUser(police);