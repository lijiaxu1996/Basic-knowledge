var wordBreak = function(s, wordDict) {
    // dp[i]表示0-i之间的字符串是否可以被拆分并满足题设条件存在于wordDict中
    let dp = new Array(s.length).fill(false);
    let set = new Set(wordDict);
    for (let i = 0; i < s.length; i++) {
        
        if (set.has(s.substring(0, i+1))) {
            dp[i] = true;
            continue;
        }
        
        for (let j = 0; j < i; j++) {
            if (dp[j] && set.has(s.substring(j+1, i+1))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length-1]
};

