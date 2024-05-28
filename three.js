// for of

let arr = [1,2,3,4,5];

for (const num of arr) {
    //  console.log(num);
}

let greetings = "Hello World!";

for (const val of greetings) {
    // console.log(val)
}

const map = new Map();

map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('Rj',"Rajasthan")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    js:"javascript",
    nd:"nodejs",
    ex:"express js",
    md:"mongodb"
}

for (const key in myObject) {
    //  console.log(`${key} :- ${myObject[key]}`);
}

const prog = ["java","javascript","c++","python"];

for (const key in prog) {
    console.log(prog[key]);
}