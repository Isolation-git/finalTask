const { User } = require('./models');

const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const PORT = 3456;
const SECRET = 'asdwdvdaw1564fdsa';

const app = express();

app.use(express.json())

app.all('*', function (req, res, next) {             //设置跨域访问
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
      res.header("Access-Control-Max-Age", 86400);
      res.sendStatus(204); //让options请求快速返回.
  }
  else {
      next();
  }
 });
 
app.get('/',function(req,res){
  fs.readFile('./data.json',function(err,data){
    if(err){
      console.log(0);
    }else{
      res.send(JSON.parse(data))
    }
  })
})
 
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
})
app.post('/api/register', async (req, res) => {
  const user = await User.create({
    username: req.query.username,
    password: req.query.password,
  });
  res.send({
    mes:'注册成功！'
  })
})

app.get('/api/find', async (req, res) => {
  const user = await User.findOne({
    username:req.query.username
  })
  if (user) {
    return res.send({
      message:"用户名已经存在！"
    })
  }
  else {
    return res.send({
      message:"用户名可用！"
    })
  }
})
  
app.post('/api/login', async (req, res) => {
  const user = await User.findOne({
    username:req.query.username
  })
  if (!user) {
    return res.send({
      message:"用户名不存在！",
    });
  }
  const isPasswordValid = require('bcrypt').compareSync(req.query.password,
    user.password);
  
  if (!isPasswordValid) {
    return res.send({
      message:"密码错误！",
    })
  }
  //生成touken
  const token = jwt.sign({
    id: String(user._id),
  }, SECRET);
  res.send({
    message:"OK",
    user,
    token
    });
})


const auth = async (req, res, next) => {
  const raw = String(req.headers.authorization).split(' ')[1];
  const {id } = jwt.verify(raw, SECRET);
  req.user = await User.findById(id);
  next();
}
  
app.get('/api/profile',auth, async (req, res) => {
  res.send(req.user);
})

app.listen(PORT,function(){
  console.log(PORT + '端口监听中');
  console.log('http://localhost:'+PORT);
});