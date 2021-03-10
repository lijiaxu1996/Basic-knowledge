function jumpFloorII(n)
{
    // write code here
    //fn = f(n-1)+f(n-2)+f(n-3)+....f(0);
    //fn-1 = fn-2+....f0
    //fn=2*fn-1
    let dp=new Array();
    dp[0]=1,dp[1]=1;
    for(let i=2;i<=n;i++)
        dp[i]=dp[i-1]<<1;
    return dp[n];
}