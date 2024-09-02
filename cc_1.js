let employeeName = "Kenzo"; // Task 1 Content, inputting my own name, employee ID, and active status.

const employeeID = 4743770;

var isActive = true;

console.log(employeeName, employeeID, isActive)
console.log(typeof "Kenzo", typeof 4743770, typeof isActive); 

let products = ["EasyWrite Pens", "EasyStick Tape", "EasyHold Envelopes"] // Task 2 Content, creating an array of three products at a stationery store, as well as an object detailing one of them.
const productDetails = {
    "name": "EasyWrite Pens",
    "price":  7.32,
    "inStock": true,
}

console.log(products, productDetails) // Task 3 Content, using financial operators to calculate an account balance.

let accountBalance = 727
console.log (accountBalance)

accountBalance += 1738
console.log(accountBalance)

accountBalance -= 411
console.log (accountBalance)

accountBalance *= 19
console.log (accountBalance)

accountBalance /= 1.3
console.log (accountBalance)

accountBalance %= 40
console.log (accountBalance) 

const employeeScore1 = 97 // Task 4 Content, using comparison operators to compare two employees' performance ratings.
const employeeScore2 = 61

employeeScore1 > employeeScore2
employeeScore1 < employeeScore2
employeeScore1 >= employeeScore2
employeeScore1 <= employeeScore2
employeeScore1 === employeeScore2
employeeScore1 !== employeeScore2

console.log (
    employeeScore1 > employeeScore2, 
    employeeScore1 < employeeScore2,
    employeeScore1 >= employeeScore2, 
    employeeScore1 <= employeeScore2, 
    employeeScore1 === employeeScore2,
    employeeScore1 !== employeeScore2,
            ) 

let hasKeycard = true // Task 5 Content, using logical operators to see if I have access to sections of a certain building.
let hasPermission = false

hasKeycard && hasPermission
hasKeycard || hasPermission

console.log(
    hasKeycard && hasPermission,
    hasKeycard || hasPermission
            )

!hasKeycard && hasPermission,
!hasKeycard || hasPermission

console.log(
    !hasKeycard && hasPermission,
    !hasKeycard || hasPermission
            ) 

