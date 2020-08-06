
/**
 * Write a function that would: arrange an array of positive integers to form the largest number.
- Note: Return a string instead of an integer in case the result is too large.
For example, given [2, 20, 24, 6, 8], the largest formed number is 8624220. 
 */
function compare(a,b){
    //concatinate the two numbers to form two different variables by putting one first and vice versa
    let ab = `${a}${b}`
    let ba = `${b}${a}`      
    // Now see which of the two formed numbers is greater 
    return ab.localeCompare(ba) > 0? -1:1
}
function sortByLargest(arr){
    // sort the array of numbers by running the compare function as a callback in javascript sort function
    arr.sort(compare)
    //return the array as string
    return arr.join("");
}
let myarr = [1, 38,9, 92, 60,10,19,2]
console.log(sortByLargest(myarr)) //9926038219110
