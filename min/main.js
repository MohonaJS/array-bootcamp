 function min(arr){
    let result = arr[0];
    for(i=1; i<arr.length; i++){
        if(result> arr[i]){
           result = arr[i];

        } 

    }
   return result;

}
min([2,3,4,1,9], [6]) 


