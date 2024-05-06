



// 2710. Remove Trailing Zeros From a String
// var removeTrailingZeros = function(num) {
//     let result = num
//     for(let i=result.length-1;i>=0;i--){
//        if(result[i]!== "0"){
//         result = result.substring(0,i+1)
//          break;
//        }
//     }
//     return result
// };

// Input: num = "51230100"
// Output: "512301"




// 2000. Reverse Prefix of Word

// var reversePrefix = function(word, ch) {
//     let charIndex = -1
//     for(let i=0;i<word.length;i++){
//         if(word[i]===ch){
//             charIndex= i
//             console.log(i)
//             break
//         }
//     }
//     let result = ""
//     for(let i=charIndex;i>=0;i--){
//         result += word[i]
//     }
//     return result + word.substring(charIndex+1,word.length)
// };

function reversePrefix(word, ch){
    let arr = word.split('');
    if(arr.includes(ch)){
        let index = arr.indexOf(ch);
        for(let i = 0; i < index/2; i++){
            let temp = arr[i];
            arr[i] = arr[index - i];
            arr[index - i] = temp;
        }
    }
    const newString = arr.join('');
    return newString;
}

console.log('reversePrefix', reversePrefix('hsbdjhsbd', 'j'));


// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"




// 125. Valid Palindrome



var isPalindrome = function(s) {
    let sanitizedString = ''; 
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i].toLowerCase(); 
        
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            sanitizedString += char; 
        }
    }

    const reversed = sanitizedString.split('').reverse().join('');
    if(sanitizedString!= reversed){
        return false
    }else{
        return true

    }

};


// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.




// 2810. Faulty Keyboard


var finalString = function(s) {
    let result = []

    for(let i=0;i<s.length;i++){
        if(s[i]=="i"){
            result.reverse()
        }else{
            result.push(s[i])
        }
    }
    return result.join("")
};


// Input: s = "string"
// Output: "rtsng"
