const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname : {
            firstname : "shubham",
            lastname : "haldar"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2  = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({} ,obj1 , obj2)//{} ye target aur sab source hai
// const obj4 = Object.assign(obj1 , obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id : 1
    },
    {
        name : "shubham"
    },
    {
        course : "BCA"
    },

]
 
console.log(user[0].id);
console.log(user[1].name);
// console.log(obj3)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));//ye batata hai ki apke paas ye property hai ya nhi True/false









