/*
7. Write a function that receives an array & search element as args 
and returns the index of that search element in the array. 
It should return "not found" when search element not found.
*/
function searchArray(arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (search === arr[i]) {
            return i; // return index (0-based)
        }
    }
    return "Not found";
}

let s = 1;
console.log(`Search Element (${s}) index: ${searchArray([0,1,2,3,4,5], s)}`);