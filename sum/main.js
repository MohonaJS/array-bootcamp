function sum(arr){
    let result = arr[0];
    for(let i=1; i<arr.length; i++){
        
            result = result + arr[i];

    }
    return result

}
sum([4,3,2,1,1])