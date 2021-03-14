//declare some variables
var myName = "Claire"
var dogName = "Jasmine"
var myAge = 30
var myBirthday = "March 19th"
var favoriteCandy = "sour skittles"
var currentJob = "student"
var lovesToClimb = true
var dogEnemy = ["squirrels", "postman", "being teased"]

//interpolate a sentence with them and print it to the console
var sentence1 = myName + " is " + myAge + " years old." + " She loves to eat " + favoriteCandy + "!"
console.log(sentence1)

//concatenate a sentence with them and print it to the console
var sentence2 = `${dogName} hates ${dogEnemy[2]}.`
console.log(sentence2)
var sentence3 = `${myName} is a ${currentJob}. She is ${myAge} years old.`
console.log(sentence3)
