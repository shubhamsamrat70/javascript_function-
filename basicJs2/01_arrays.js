// array 

const myArr = [0,1,2,3,4]
// console.log(myArr[3]);


// Array Methods

// myArr.push(6)
// myArr.pop()
// myArr.push(7)

// myArr.push(8)
// myArr.pop()
// myArr.push(9)

// myArr.unshift(6)

// myArr.shift()
// myArr.push(6)
// myArr.pop()
// myArr.unshift(6)

// console.log(myArr);//0,1,2,3,4,7,9
// //Push/Pop → End
// //Unshift/Shift → Beginning

// console.log(myArr.includes(15));// ye true ya false o/p dega 
// console.log(myArr.indexOf(19));// ye us value ka index ya vo value nhi hogi to -1 o/p dega


// console.log(myArr);

// const newArry = myArr.join()
// console.log(typeof newArry);


// Slice , Splice

const myn1 = myArr.slice(1 , 3)

console.log(myn1);//[1, 2]

console.log("B ", myArr);// B  [0,1,2,3,4, ]

const myn2  = myArr.splice(1 , 3)
console.log(myn2);

console.log("B ", myArr.splice( 1 , 3));













