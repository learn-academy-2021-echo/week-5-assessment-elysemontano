// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { expect } = require("@jest/globals")
// const { it } = require("jest-circus")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codedMessage", () => {
    it("returns coded message with a = 4, e = 3, i = 1, and o = 0", () => {
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.
        //iterate over string to find vowels using .map
        //if value is a, e, i, o, u --> 
        //modify vowels with .push to index of current value to specified number
        
const codedMessage = (string) => {
    //split string to allow iteration with map
    let mappedMessage = string.split("").map(value => {
        //create an empty array so each if/else statement will push a character to the message to join after iteration
        var message = []

        //checks for "a" or "A" and changes to 4
        if(value.toLowerCase() === "a"){
            message.push("4")

        //checks for "e" or "E" and changes to 3
        } else if(value.toLowerCase() === "e"){
            message.push("3")

        //checks for "i" or "I" and changes to 1
        } else if(value.toLowerCase() === "i"){
            message.push("1")

        //checks for "o" or "O" and changes to 0
        } else if(value.toLowerCase() === "o"){
            message.push("0")

        //pushes all non vowel values unmodified into array
        } else {
            message.push(value)
        }
        return message
    })
    return mappedMessage.join("")
}

console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))
console.log(codedMessage(secretCodeWord3))


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("containsLetter", () => {
    it("returns words from array that contain specified letter", () => {
        expect(containsLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(containsLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

const containsLetter = (array, letter) => {
    //filtering array and setting each value to be lowercase and use include to check if value has letter
    return array.filter(value => {
        return value.toLowerCase().includes(letter)
    })
}

console.log(containsLetter(arrayOfWords1, letterA))
console.log(containsLetter(arrayOfWords2, letterE))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [3, 5, 5, 3, 3]
// Expected output: true


describe("fullHouse", () => {
    it("returns true if hand is full house or false if not full house", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// b) Create the function that makes the test pass.
const fullHouse = (array) => {
    //variable pair tracks if there is a pair
    let pair = 0 
    //variable threeOfAKind tracks if there is three of a kind
    let threeOfAKind = 0
    //nextNumber resets the value to a different value than the first number in array so we can compare value to the rest of the values in array.
    let nextNumber = 0
    //map over array to iterate each value and compare, keeping track of how many are the same with set variables above.
    array.map(value => {
        //checks current value to first value in array and updates threeOfAKind variable
        if(value === array[0]){
            threeOfAKind += 1

        //resets value by creating a set true boolean to reassign nextNumber to the next number we want to compare and updates pair variable
        } else if (nextNumber === 0){
            nextNumber = value
            pair += 1

        //continues to check value to set nextNumber variable and updates pair variable if matches are found
        } else if (value === nextNumber){
            pair += 1
        }
    })

    //checks that pair is only 2 AND threeOfAKind is only 3
    if(pair === 2 && threeOfAKind === 3){
        return true
    } else {
        return false
    }
}

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
//adding edge case where three of a kind is not grouped together
console.log(fullHouse(hand4))