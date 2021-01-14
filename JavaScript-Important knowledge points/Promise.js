const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function Promise(exector){
    let self = this;//保存当前的指针
    self.status = PENDING;//默认状态时pending
    self.onResolveCallbacks = [];//定义回调成功的数组
    self.onRejectCallbacks = [];//定义回调失败的数组
    function resolve(value){
        if(self.status == PENDING){
            self.status = FULFILLED;
            self.value =value;
            self.onResolveCallbacks.forEach(callback=>callback(self.value));
        }
    }
    function reject(reason){
        if(self.status == PENDING){
            self.status = REJECTED;
            self.reason = reason;
            self.onRejectCallbacks.forEach(callback=>callback(self.reason))
        }
    }
    try {
        exector(resolve,reject)
    } catch (e) {
        rejected(e)
    }
}