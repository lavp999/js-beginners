
function sing(){
    const repetir = "Let it be";
    let letra = "";

    for (let i = 0; i < 4; i++){
        letra = letra + repetir + ", ";
    }
    letra = letra + "whisper words of wisdom, ";

    for (let i = 0; i < 5; i++){
        letra = letra + repetir + ", ";
    }
    return letra + "there will be an answer, " + repetir
}


//Your code above ^^^

console.log(sing());