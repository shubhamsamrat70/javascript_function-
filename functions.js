// function sayMyname(){
//     console.log("s");
//     console.log("h");
//     console.log("u");
//     console.log("b");
//     console.log("h");    
// }

// sayMyname();


                        //parameter
// function addTonumbers(number1, number2){
                  
//     console.log(number1 + number2 );
    
// }                         //argument
// const result =  addTonumbers(3,"4")
// console.log("Result :",result);

// function addTonumberss(num1 , num2){
//     // let result = num1 + num2;
//     // return result
//     return num1 + num2;
// }

// const result = addTonumberss( 5, 5);
// // console.log("Result" , result);

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("please enter a username");
//         return 
        
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("shubham"));


function loginUser(username = "shubham"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUser());

function calculatePrice(num1 , num2 , num3, num4){
    return [num1 , num2 , num3 , num4];
}
// console.log(calculatePrice(2 , 4 , 5 , 6 ));

// function calculatePrice(...num1){
//     return num1;
// }
// console.log(calculatePrice(2 , 4 , 5 , 6 ));// Rest Operator


function calculatePrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculatePrice(2 , 4 , 5 , 6 ));//val1 <= 2 || val2 <= 4 || num1 <= [5,6]

const user = {
    username : "shubham",
    prices : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`)

}
// handleObject(user);

handleObject({
    username : "sam",
    prices : 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue([200,300,300,600]));// 300






