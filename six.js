const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map( (num) => {
//         return num + 100
// } );

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

// console.log(newNums);


// reduce

const numbers = [1,2,3,4];

const newNumbs = numbers.reduce( function (acc,currval){
    // console.log(`acc : ${acc} and currval : ${currval}`);
      return acc + currval
},0 )

// console.log(newNumbs);

const shoppingCart = [
    {
        courseName:"MernStack",
        fees:25900
    },
    {
        courseName:"ReactJS",
        fees:12900
    },
    {
        courseName:"AngularJS",
        fees:8000
    },
    {
        courseName:"App develepment",
        fees:10000
    }
];

const newArr = shoppingCart.reduce( (acc,fee) => {
    return acc + fee.fees
},0 );
console.log(newArr);