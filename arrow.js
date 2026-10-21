const user  = {
    username: "shubham",
    price: 999,
    welcomemessage:function(){
        console.log(`${this.username} ,welcome to website`);
        // console.log(this);
        
    }

}
 
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);//{}
// Browser ke andar jo global object hai vo hai window object

// function chai(){
//     let username = "shubham"
//     console.log(this.username);// undefined
// }
// chai() // function ke andar this use nhi hoga ye object ke andar hi ho payega

// const chai = function (){
//     let username = "shubham"
//     console.log(this.username);// undefined
// }

// const chai = () => {
//     let username = "shubham"
//     console.log(this.username);// undefined
// }

// chai() 


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)
const addTwo = (num1 , num2) => ({username : "shubham"})

console.log(addTwo(4,5));


// explicity return ka matlab hai return keyword lagana padega
// implisit return ka matlab hai return keyword nhi lagana padega