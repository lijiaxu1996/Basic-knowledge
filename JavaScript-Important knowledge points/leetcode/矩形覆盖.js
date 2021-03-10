function rectCover(number)
{
    // write code here
    let dp = new Array();
    dp[0]=0,dp[1]=1,dp[2]=2;
    for(let i=3;i<=number;i++)
        dp[i]=dp[i-1]+dp[i-2];
    return dp[number];
}