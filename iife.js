// Immediately Invoked Funtion Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`Db Connected`);
    
})();

(  () => {
    // unamed iife
    console.log(`Db Connected Two`);
    
})();

//funtion ko end karne ke liye ; lagana jaruri hai

((name) => {
    // parameter passed iife
    console.log(`Db Connected Two,${name}`);
    
})("shubham")