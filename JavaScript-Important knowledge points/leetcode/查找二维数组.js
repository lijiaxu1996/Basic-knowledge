function Find(target, array){
    //首先判断二位数组长度是不是0，是0的话返回
    if(array.length === 0){
        return false;
    }
    let row=0,col=array.length-1; //设定对应的行和列的起始坐标
    for(;row<=array.length-1 && col>=0;){
        if(array[row][col] === target){
            return true;
        }else if(array[row][col]>target){ /**
            1.让行从上到下进行遍历
            2. 让列从右到左进行遍历。
            */
            col--;
        }else{
            row++;
        }
    }
    return false;
}
