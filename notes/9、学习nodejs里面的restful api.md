## 1、理解什么是RestFul Api

**请直接参考：http://www.ruanyifeng.com/blog/2014/05/restful_api.html**

## 2、用express设计一种restful 风格的程序

### 2.1、环境依赖

![](https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master/img/restful01.jpg)

### 2.2、app.js

```javascript
const  express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL,{ useUnifiedTopology: true ,useNewUrlParser: true });
const db = mongoose.connection;
db.on('error',(error) => console.error(error));
db.once('open',() => {console.log('connected successfull')});

//开始定义路由
app.use(express.json());
const usersRouter = require('./routes/users');
app.use('/users',usersRouter);
app.listen(3000,() => {console.log('server started at 3000')});
```

### 2.3 model/users.js

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    userSchool: {
        type: String,
        required:true
    },
    userRegisterDate:{
        type:Date,
        required:true,
        default:Date.now
    }
})
module.exports = mongoose.model('User',userSchema);
```

### 2.4 route/users.js

```javascript
const express = require('express');
const router = express.Router();
const User = require('../models/users')
router.get('/',async (req,res) => {
    // res.send('Hello,Express')
    try {
        const user = await User.find();
        res.json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.get('/:id',getUser,(req,res) => {
    res.send(res.user.name)
})

router.post('/',async (req,res) => {
    const user = new User({
        name:req.body.name,
        userSchool:req.body.userSchool
    })
    try {
        const newUser = await user.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

router.patch('/:id',getUser,async(req,res) => {
    if(req.body.name != null){
        res.user.name = req.body.name;
    }
    if(req.body.userSchool != null){
        res.user.userSchool = req.body.userSchool;
    }
    try {
        const updateUser = await res.user.save();
        res.json(updateUser);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
})

router.delete('/:id',getUser,async(req,res) => {
    try {
       await res.user.remove();
       res.status(200).json({msg:"delete user"}) 
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
})
async function getUser(req,res,next){
    let user;
    try {
        user = await User.findById(req.params.id);
        if(user == null){
            return res.status(404).json({msg:"Cannot find user"})
        }
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
    res.user = user;
    next()
}

module.exports = router;
```

## 3、使用rest client插件进行测试

```bash

GET http://localhost:3000/users

###
GET http://localhost:3000/users/6020ca6d0902a906d6092582


###
POST http://localhost:3000/users 
Content-Type: application/json

{
    "name":"Jesse",
    "userSchool":"xxxxxx"
}

###
DELETE http://localhost:3000/users/6020ca6d0902a906d6092582

###
PATCH http://localhost:3000/users/6020ced5e781da0728089ee5
Content-Type: application/json

{
    "name":"Jesse1",
    "userSchool":"xxxx"
}
```