// for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer value : ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(i + "*" + j + " = " + i * j);
  }
}

let myArray = ["flash", "batman", "spiderman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detect 5`);
//         break;
//     }
//     console.log(`Value of index is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detect 5`);
    continue;
  }
  console.log(`Value of index is ${index}`);
}
