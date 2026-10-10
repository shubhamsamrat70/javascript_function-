//  singleton
// object.create
// objects literals


const sym = Symbol("mysym1")
const JsUser = { 
    name : "shubhem",
    "full name" : "shubham samrat" , 
    age : 18,
    location : "prayagraj",
    email : "shubham@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"],
    [sym] : "msym2",

}
// console.log(JsUser["name"]);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// // console.log( typeof JsUser["sym"]);
// console.log(JsUser[sym]);
// console.log( typeof JsUser[sym]);


// JsUser.age = 20

// console.log(JsUser["age"]);
// Object.freeze(JsUser)

// JsUser["full name"] = "shubhham samrrat"

// console.log(JsUser["full name"]);



JsUser.greeting = function(){
    console.log( `Welcome , ${this.name}` );   
}
JsUser.greeting();

JsUser.greetingTwo = function(){
    console.log(`hello Js User ,${this["full name"]}`);   
}
JsUser.greetingTwo();

JsUser.greetingThree = function(){
    console.log(`hello brother , ${this["full name"]}`);
}
JsUser.greetingThree();


// git remote set-url origin https://github.com/shubhamsamrat70/javascript_function-.git
// git add .
// git commit -m "update msg"
// git push








