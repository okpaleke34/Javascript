/**
 * 
 *Write a function that would return the Nth largest element from the end in an array, and then provide a set of test cases against that function.
  Note: That is the Nth largest element in the sorted order, not the Nth distinct element.
 For Example: Given [3,2,1,5,6,4] and n = 2, return 5
 */

function nthLargest(n,arr) {
    if(arr.length < n){
        return `the nth number '${n}' is bigger than array size(${arr.length})`
    }
    //sort array in descending order
    arr.sort((a, b) => b - a);

    return `the nth largest number '${n}' in the array is (${arr[n-1]})`
}

console.log(nthLargest(3,[9,1,34,20,6,50,99])) //the nth largest number '3' in the array is (34)
