
// Palindrome check 
function palindromeCheck(str){
    let rev = ""
    for(let i=str.length-1; i>=0; i--){
        rev +=str[i];
    }
    if(rev == str){
        return true
    }
    else{
        return false
    }
}

// First Non-Repeating Character
function firstNonRepeat(s){
    for(let i = 0; i < s.length; i++){
        let count = 0;

        for(let j = 0; j < s.length; j++){
            if(s[i] == s[j]){
                count++;
            }
        }

        if(count == 1){
            return s[i];
        }
    }
    return null;
}


//separeate number and character from string 
function separateString(str){
    let num = ""
    let char = ""
    for(let i = 0 ; i<str.length; i++){
        let ch = str[i]
        if(ch >="0" && ch <= "9"){
            num += ch
        }
        else{
            char +=ch
        }
    }
    console.log(`number : ${num}`)
    console.log(`char : ${char}`)
}


// Get number from string and add them 
function addNumber(str){
    let sum = 0;
    for (let i=0; i<str.length; i++){
        if(str[i]>="0" && str[i]<"9"){
            let ch = str[i]
            sum+= Number(ch)
        }
    }
    return sum 
}


// for multi digit number 
function 
