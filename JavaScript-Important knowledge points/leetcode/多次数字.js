/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //设置一个标志位
    let count = 0;
    let ans = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if(ans == nums[i])
        count++;
        else{
            count--;
            if(count==0){
                ans=nums[i];
                count++;
            }
        }
    }
    return ans;
};