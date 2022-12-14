// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Solution:
var majorityElement = function (nums){
    const ht = {};

    for (const num of nums){
    ht[num] = ht[num] + 1 || 1;
}
    for ( const key in ht) {
    if (ht[key] > Math.floor(nums.length / 2)){
        return key
    }
 
    }
 
 }