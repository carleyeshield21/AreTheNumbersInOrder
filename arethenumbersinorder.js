// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript
function inAscOrder(arr) {
    let newarr = new Array(...arr)
    newarr.sort(function(a, b){return a-b});
    let counter = 0
    for(i=0; i<=arr.length-1; i++){
        // console.log(arr[i], newarr[i])
        if(arr[i] == newarr[i]){
            counter++
        } else {
            console.log(`The numbers\n[${arr}] are NOT in order`)
            console.log(false)
            break
        }
    }
    // console.log(counter)
    if(counter == arr.length){
        console.log(`The numbers\n[${arr}] are IN order`)
        console.log(true)
    }
}
inAscOrder([1,2,4,7,19])
console.log('========')
inAscOrder([1,2,3,4,5])
console.log('========')
inAscOrder([1,6,10,18,2,4,20])
console.log('========')
inAscOrder([9,8,7,6,5,4,3,2,1])