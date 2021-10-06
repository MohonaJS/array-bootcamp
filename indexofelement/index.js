function indexOfElement(arr, element){

    for(i=0; i<arr.length; i++){
        if(arr[i] == element){
            return arr[i];

        }
    }
    return -1;
   
}
indexOfElement("23412", "4")