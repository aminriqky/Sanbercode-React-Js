//Soal 1
const newFunction = (firstName, lastName) => {
    return {
        firstName, lastName, fullName : () => {
            console.log(firstName + " " + lastName)
        }
    }
}

newFunction("William", "Imoh").fullName()

//Soal 2
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject

console.log(firstName, lastName, destination, occupation)

//Soal 3
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

console.log(combined)