function maxArray(arr) {
    var max = arr[0];
    for(var i=1 ;i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxArray([1,400,20,-56])); //400 - the maximum 
