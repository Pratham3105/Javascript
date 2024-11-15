// const coding = ['js', 'java', 'cpp', 'py']

// const language = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(language); //undefined
// any value is not stored in the language variable in any condition

const nums = [1,2,3,4,5,6,7,8,9,10]
let newNums = nums.filter((num)=>num>4)
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]
const Nums = nums.filter((num)=>{
    return num>4
}) // if we open curly braces in multiple lines so return keyward is necessary
// implicit return and explicit return
console.log(Nums); // [ 5, 6, 7, 8, 9, 10 ]

const number = []
nums.forEach((num)=>{
    if(num>4){
        number.push(num)
    }
})
console.log(number); // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((books)=> books.genre ==='History')
// userBooks = books.filter((books)=> { return books.publish>=2000 })
// userBooks = books.filter((books)=> {
//     return books.genre ==='Science' && books.publish>=2000
// })

console.log(userBooks);
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
// ]







