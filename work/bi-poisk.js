function linearSearch(arr, value){
    let result = 0;
    for(i=0; i < arr.length; i++){
        console.log(arr[i]);
        if(arr[i] == value){
            return result = i;
        }
    }
    return result = -1;
}
let arr1 = [1,3,4,5,7,9,34,89,99];
console.log('Найдено под индексом: '+ linearSearch(arr1, 9));

function binarySearch(arr, value){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let midlle = Math.floor((left+right)/2);
        console.log(arr[midlle]);
        if(arr[midlle] == value){return midlle}
        else if(arr[midlle] > value){right = midlle-1}
        else{left = midlle+1}
    }
    return -1;
}
let arr2 = [1,3,4,5,7,9,34,89,99];
console.log(binarySearch(arr2,99))