// main.js

// the following fuctions have been loaded to this main file
const f = require('./functions');
console.log(f.add(10, 9))
console.log(f.subtract(10, 9))
console.log(f.multiply(10, 9))
console.log(f.divide(10, 9))
console.log(f.toLowerCaseList(['Gilberto']))
console.log(f.convertNamesToLengths(['Gilberto']));
console.log(f.sortByLength(['Gilberto', 8]))
console.log(f.sortAlphabetically(['Gilberto']))
console.log(f.processStudentNames(['Gilberto', 'Gilberto']))
console.log(f.donatePoints(70, 4, 11))
/*



    
    */


//please look at functions.js and observe the inputs that being asked to use then enter them and check if expected results were given



/*Find a function that takes one of the other functions is output and use that output to enter it as a function is input.

for example lets say we have function s
*
sell(money) =>{return money * 5}
moneyMade(sold) => {return 20 * sold}
****
This function returns some number so I can use that output in such manner

moneyMade(sell(10))

do something like this.

*/


