// Your code here:
function cancion(botellas){
    for(let i = botellas; i > 1; i--){
        console.log(i + " bottles of milk on the wall, "+ (i-1) +" bottles of milk.");
        console.log("Take one down and pass it around, "+ (i-1) +" bottles of milk on the wall.");
        console.log("");
        console.log((i-1) + " bottles of milk on the wall, "+ (i-1) +" bottles of milk.");
        if((i-2) == 0){
            console.log("Take one down and pass it around, no more bottles of milk on the wall.");
            console.log("------------");
        }else{
            console.log("Take one down and pass it around, "+ (i-2) +" bottles of milk on the wall.");
            console.log("------------");
        }
    }
    console.log("------------");
    console.log("1 bottle of milk on the wall, 1 bottle of milk.");
    console.log("Take one down and pass it around, no more bottles of milk on the wall.");
    console.log("");
    console.log("No more bottles of milk on the wall, no more bottles of milk.");
    console.log("Go to the store and buy some more, "+botellas+" bottles of milk on the wall.");
    console.log("------------");
}

console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
cancion(3);