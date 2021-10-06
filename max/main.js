function max(arr){
    let result = arr[0];
    for(let i=1; i<arr.length; i++ ){
       if(result<arr[i]){
           result = arr[i];

       } 

    }
    return result;

}
max([6,4,6,7,8], 8) 