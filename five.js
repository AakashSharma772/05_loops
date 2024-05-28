const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  return num > 5;
});
// console.log(newNums);

const books = [
  {
    title: "Book one",
    genre: "History",
    publish: 1988,
    edition: 2009,
  },
  {
    title: "Book two",
    genre: "Political",
    publish: 1980,
    edition: 2008,
  },
  {
    title: "Book three",
    genre: "Maths",
    publish: 1999,
    edition: 2023,
  },
  {
    title: "Book four",
    genre: "Geography",
    publish: 2008,
    edition: 2020,
  },
  {
    title: "Book five",
    genre: "Scince",
    publish: 1989,
    edition: 2009,
  },
  {
    title: "Book six",
    genre: "History",
    publish: 1998,
    edition: 2010,
  },
  {
    title: "Book seven",
    genre: "Political",
    publish: 1988,
    edition: 2009,
  },
];

let newBooks = books.filter((bk) => bk.genre === "Political");

newBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(newBooks);
