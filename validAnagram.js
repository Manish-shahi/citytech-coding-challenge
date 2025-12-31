function validAnagram(s, t) {
    // length should be same
    if (s.length !== t.length) return false;
  
    const count = {};

    // Count characters in s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Decrease based on t
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

console.log(validAnagram("listen", "silent")); // true
console.log(validAnagram("rat", "car")); // false
