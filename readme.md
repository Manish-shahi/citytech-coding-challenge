# Problem: Valid Anagram

### **Examples**
Input: `s = "listen"`, `t = "silent"` → Output: True
Input: `s = "rat"`, `t = "car"` → Output: False

## Logic / Approach

1. If the strings have different lengths, return `false` because anagrams must use all characters once.  
2. Create a frequency count for characters of the first string and decrement counts for the second.  
3. If any character count becomes non‑zero, they are not anagrams. Otherwise, return `true`.

## Time Complexity and Space Complexity

1. Time Complexity: O(n)
2. Space Complexity: O(1)
