/**
 * 核心:根据先序遍历和中序遍历 求出原二叉树
 */
//递归算法
 function reConstructBinaryTree(pre, vin) {
    // write code here
      if( pre.length === 0 || vin.length === 0){ 
          //边界
          return null
      }
      let root=vin.indexOf(pre[0]); //查找根节点在中序里面的位置
      let leftChildTree=vin.slice(0,root);  //根的左面是左子树
      let rightChildTree=vin.slice(root+1);  //根的右边是右子树
      return {
          val : pre[0],  
          left : reConstructBinaryTree(pre.slice(1,root+1),leftChildTree), //左子树
          right : reConstructBinaryTree(pre.slice(root+1),rightChildTree) //右子树
      }
  }
  