var tenVals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function myPush(arr, any){
arr.push(any);
return arr;

}
console.log(myPush(tenVals,"push it"));

function mySplice(arr){
    arr.splice(0,3);
    return arr;
}
console.log(mySplice(tenVals));

function mySlice(arr){
    arr.slice(0,6);
    return arr
}

console.log(mySlice(tenVals));