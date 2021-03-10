function Fibonacci(n)
{
    //write code here
//     if(n==0||n==1) return n;
//     let a=0,b=1,c;
//     for(let i=2;i<=n;i++){
//         c=a+b;
//         a=b;
//         b=c;
//     }
//     return c;
    if(n==0||n==1) return n;
    let a=0,b=1;
    for(let i=2;i<=n;i++)
    [a,b]=[b,a+b]; //解构赋值最优
    return b;
//     let dp = new Array();
//     dp[0]=0;
//     dp[1]=1;
//     for(let i=2;i<=n;i++){
//         dp[i]= dp[i-1]+dp[i-2];
//     }
//     return dp[n];
}