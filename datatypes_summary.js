// ##__Primitive 
// 7 types : Sting, Number, Boolean, Null, undefined, Symbol, BigInt
 const str1 = "shubham"
//  console.log(typeof str1);//string

 const score = 100
//  console.log(typeof score);//number
 
 const score1 = 10.2
//  console.log(typeof score1);//number

 const bool = true
//  console.log(typeof bool);//boolean

 const n = null
//  console.log(typeof n);//Object

 const un = undefined 
//  console.log(typeof un);//undefined

 const id  = Symbol('123')
 const anotherid = Symbol('123')
//  console.log(id == anotherid);// symbol unique hota hai isiliye #false ayega q ki dono number hai to same
                            //   but apne me unique hai 
//  console.log(typeof id);//Symbol

 const BigInt = 5345434356443n
//  console.log(typeof BigInt);// BigInt
 



// ##__Reference (Non Primitive)

// Array, Objects, Functions
const heros = ["varun","govinda","mithun daa"]
let myObj = {
    name : "shubhham",
    age : 22,
}
// console.log(typeof myObj);//typeof array ke liye "object" return karta hai because arrays 
//are objects in JavaScript. To specifically check an array, use Array.isArray().


const myFunction = function(){
    // console.log("hello world");
    
}
// console.log(typeof myFunction);
myFunction ()


//+}++++++++++++++++++++++++++++++++++++++++++++++++++++++++{++++++++++++

//Stack (Primitive) :- isme jo bhi memory provide hoti hai vo copy hoti hai previous memory ke 
// Heap (Non-Primitive) :- But isme original value ka reference milta hai

//*****************Stack**************************//

let myYoutubename = "shubhham"
anothername = myYoutubename
anothername = "prince"
// console.log(myYoutubename);//shubhham
// console.log(anothername);//prince

//****************************Heap*************************//

let userOne = {
    email: "shubham@gmail.com",
    upi: "shubham@ybl"
}

let userTwo = userOne
userTwo.upi = "shuub@ybl"

// console.log(userOne);//upi = shuub@ybl

// console.log(userTwo);//upi = shuub@ybl

