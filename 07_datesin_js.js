// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let createdDate = new Date("01-05-2005")

// console.log(createdDate.toDateString());//Tue Jul 11 2023
// console.log(createdDate.toLocaleString());//7/11/2023, 12:00:00 AM

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)


console.log(
  `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()} ` +
  `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
);

let cur = newDate.toLocaleString('default',{
  weekday : "long",
  year : "numeric",
  month :  "long",
  day : "numeric",
  hour : "2-digit",
  minute : "2-digit",
  second : "2-digit",

})
console.log(cur);









// 0 jan
// 1 feb
// 2 mar
// 3 apr
// 4 may 
// 5 june 
// 6 july
// 7 Aug
// 8 Sep
// 9 Oct 
// 1o Nov
//  .
//  .
//  .
//  .
// EtC





