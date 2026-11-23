function bis(arr, value){
    left = 0;
    right = arr.length-1;
    while(left<=right){
        console.log(arr.slice(left,right+1));
        let midlle = Math.floor((left+right)/2);
        console.log('середина -' + arr[midlle]);
        if(value == arr[midlle]){return midlle;}
        else if(value < arr[midlle]){
            right = midlle-1;
        }else{
            left = midlle+1;
        }
    }
    return -1;
}
arr1 = [2,3,4,5,6,7,15];
console.log(bis(arr1,20 ));