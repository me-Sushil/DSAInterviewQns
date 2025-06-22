function isPalindrome(str) {
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleanStr.length - 1;
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("level")); // true
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
