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

// Reverse Array
function reverseArray(arr){
     let rev =[]
     for(let i=arr.length-1;i>=0;i--){
          rev.push(arr[i])

     }
     return rev
}

// Count even number
function evenNumber(arr){
     let count = 0;
     for(let i = 0 ; i<arr.length; i++){
          if(arr[i]%2==0){
               count++
          }

     }
     return count
}
// find second largest Element
function secLargestElement(arr){
     let first = - Infinity;
     let second = -Infinity;

     for(let i of arr){
          if(i>first){
               second = first
               first = i;
          }
          else if(i > second && i!==first){
               second = i;
          }
     }
     return second
}
console.log(secLargestElement([1,2,3,4,5]))

//find min element in the array
function minElement(arr){
    let min = Infinity ;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){  
            min = arr[i]

        }
    }
    return min

}
console.log(minElement([-1,2,-2,3,43]))


// is array sorted in ascending order
function isArraySorted(arr){
    for(let i=0; i<=arr.length ; i++){
        if(arr[i] > arr[i+1]){
            return false
        }
    }
    return true

}
console.log(isArraySorted([1,2,3,6,5]))

//sum of element
function sumElement(arr){
    let sum = 0 
    for(let i=0 ; i<arr.length; i++){
        sum+=arr[i]
    }
    return sum 
}
console.log(sumElement([1,2,24,24,4,131,31,3,123,243,2,42342455,23,32,54,32,55,325,25,234,53,43,4,34,3
    
]))