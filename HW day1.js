//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dogStr, dogArr) {
    matchedNames = 0
    for (i of dogArr)  {
        if (dogStr.toLowerCase().includes(i.toLowerCase())) {
            console.log("Matched dog name " + i)
            matchedNames += 1
        }
    }
    if (matchedNames == 0) {
        console.log("No matches.")
    }
}

findWords(dog_string, dog_names)

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function replaceEvens(arr) {
    for (i = 0; i < arr.length; i += 2) {
        newVar = arr.splice(i, 1, "even index")
    }
    console.log(arr)
} 

replaceEvens(["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"])

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Codewars #1: Training JS #7: if..else and ternary operator

function saleHotdogs(n){
    if (n < 5) {
      return 100 * n
    } else if (n >= 5 && n < 10) {
      return 95 * n
    } else {
      return 90 * n
    }
  }

// Codewars #2: Training JS #10: loop statement --for

function pickIt(arr){
    var odd=[],even=[];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        even.push(arr[i])
      } else {
        odd.push(arr[i])
      }
    }
    return [odd,even];
  }