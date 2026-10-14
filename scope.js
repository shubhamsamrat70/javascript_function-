// let a = 300
// var c = 3000


// if (true){
//     let a = 10
//     const b = 20
//     var c  = 30

//     console.log("inner",a);
//     console.log("inner c", c);
    
    
// }  // block scope

// console.log(a);
// // console.log(b);
// console.log(c);


//node aur windows me global scope alag hai



function one(){
    const username = "shubhham"

    function two(){
        // const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()

}
// one()

if (true){
    const username = "shubhham"
    if (username === "shubhham"){
        const website = " youtube"
        // console.log(username + website);
}
// console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++ // 


// console.log(addone(5));
// function addone(num){
//     return num + 1
// }


// const addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(2));//Like a Expression


console.log(addTwo(2));// Error Because variable me function store ho ra hai to hosting se related problem hai
                       // const ko initilize karne ke pehle call nhi kar sakte
const addTwo = function(num){
    return num + 2
}






