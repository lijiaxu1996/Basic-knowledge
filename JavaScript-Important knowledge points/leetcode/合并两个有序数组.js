/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m-1;
    let p2 = n-1;
    let cur = nums1.length-1;
    while(p2>=0){
        //从后面往前面直接进行扫描，对于大的那个数字直接放到nums1里面
        if(p1 >= 0 && nums2[p2] < nums1[p1]){
            nums1[cur] = nums1[p1];
            p1--;
            cur--;
        }
        else
        nums1[cur--] = nums2[p2--];
    }
};