function jumpFloor(number)
{
    // write code here
     let dp = new Array();
     dp[0]=1,dp[1]=1;
    for(let i=2;i<=number;i++)
     dp[i]=dp[i-1]+dp[i-2]; //动态规划
    return dp[number];
}