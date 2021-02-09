/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
//确定在哪个点进行测试
let getPoint = (rest,M) => {
    //M表示最多的测试机会，也就是鸡蛋总数
    if(rest ===1 || M ===1) {
        return rest;
    }
    //表示没有摔碎和摔碎，测试次数和鸡蛋的变化，+1表示测试p点并且p点已经测试成功
    return getPoint(rest-1,M)+getPoint(rest-1,M-1)+1;
}
var superEggDrop = function(K, N) {
    // 确定鸡蛋最少掉落几次
    /**
     * 1. 有K个鸡蛋 M次测试机会,在长度为N的区间内进行测试，确定那个刚好不会摔破的鸡蛋的点，
     * 2. 求M最少是多少？
     */
    let m = 1;//假设m最小是1次
    while(getPoint(m,K)<N){
        m++;
    }
    return m;
    
};
