function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length===0) return 0;//如果数组长度是0，return0
    let size = rotateArray.length;
    let left =0;
    let right = size-1; //定义左右里边的索引
    //二分查找开始
    while(left<right){
        let mid = Math.floor((left+right)>>1);
        //递减，如果中点比right大，所以最小值一定在有右半部分
        if(rotateArray[mid]>rotateArray[right]) left = mid+1;
        //如果小的话，一定在左边，索引改变
        else if(rotateArray[mid]<rotateArray[right]) right = mid;
        //如果mid和right对应的值相等，将right一遍一遍减小试探，缩小查找范围
        else right -= 1;
    }
    return rotateArray[left];
}