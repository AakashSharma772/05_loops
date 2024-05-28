const coding = ["ruby", "java", "cpp", "python", "node"];

// coding.forEach(function (item) {
//   console.log(item);
// });

coding.forEach( (val) => {
    // console.log(val);
} );

coding.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
} );

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },

    {
        languageName : "python",
        languageFileName : "py"
    },

    {
        languageName : "NodeJs",
        languageFileName : "nd"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName,':-', item.languageFileName);
} );