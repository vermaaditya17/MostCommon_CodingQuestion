// Two sum Question 
function twoSum(arr , target){
     for(let i =0; i<arr.length; i++){
          for(let j = i+1; j<arr.length; j++){
               if(arr[i]+arr[j] == target){
                    return [i , j]
               }
          }
     }
}
// find second largest element 
function reverseString(str){
    let res=""
    for(let i = str.length-1; i>=0; i--){
        res +=str[i];
    }
    return res
};

// find maximum element
function maxElement(arr){
     let max = 0
     for(let i =0 ; i<arr.length;i++){
          if(arr[i]>max){
               max= arr[i]
          }
     }
     return max
}

// Reverse 