function replaceSpace(s){
    // let str = s.split(''); //用空格切分
    // for(let i=0;i<list.length;i++){
    //     if(list[i] === ' '){
    //         list[i] = '%20';
    //     }
    // }
    // return list.join('');
    return s.split('').replace(' ','%20').join('')
}