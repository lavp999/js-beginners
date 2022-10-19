let person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: null // person2   //Object, yes the same variable/object defined after
};

let person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

let family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};

function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
person.significant_other = person2;
person.lucky_numbers[3] = 33;

let person3 = {
    name: "Jimmy",                //String
    lastname: "Doe",
    age: 13,                     //Number
    gender: "male",
    lucky_numbers: [1, 2, 3, 4], //Array
    significant_other: null //Object, yes the same variable/object defined after
};
family.members.push(person3);

function addAllFamilyLuckyNumbers(miembros){
    let suma = 0;

    for(x in miembros){
        for(i in miembros[x].lucky_numbers){
            suma = suma + miembros[x].lucky_numbers[i];
        }
    }

    return "Suma: " + suma;
}


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 