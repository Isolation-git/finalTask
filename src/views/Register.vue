<template>
  <div class="container">
    <div class="register">
      <div class="tm_register">天猫账号注册</div>
      <div class="reg_username">
        <div class="reg_title">天猫账号:</div>
        <input type="text" v-model="username" placeholder="请输入天猫账号" />
      </div>
      <div class="reg_password">
        <div class="reg_title">密码:</div>
        <input type="password" v-model="password" placeholder="请输入密码" />
      </div>
      <div class="reg_password_rep">
        <div class="reg_title">确认密码:</div>
        <input
          type="password"
          v-model="password_rep"
          placeholder="请再次输入密码"
        />
      </div>
      <button class="_register" @click="register">点击注册</button>
      <button class="gotoLogin" @click="gotoLogin">返回登录</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      password_rep: "",
    };
  },
  methods: {
    register() {
      console.log(this.username.length);

      if (this.username.length < 3) {
        alert("用户名应大于三位！");
      } else if (this.password != this.password_rep) {
        alert("两次输入的密码不一致！");
      } else if (this.password.length < 6) {
        alert("密码应不少于6位！");
      } else {
        axios({
          method: "get",
          url: "http://localhost:3456/api/find",
          params: {
            username: this.username,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
          .then((res) => {
            // console.log(res.data.message);
            if (res.data.message == "用户名可用！") {
              axios({
                method: "post",
                url: "http://localhost:3456/api/register",
                params: user,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }).then((res) => {
                // console.log(res);
                alert("用户名可用！注册成功！");
              });
            } else {
              alert(res.data.message + "注册失败！");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      let user = {
        username: this.username,
        password: this.password,
      };
      //   console.log(this.username, this.password, this.password_rep);
      console.log(user);
    },
    gotoLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 720px;
  background-color: #de0100;
  z-index: 999;
}
.register {
  width: 500px;
  height: 400px;
  margin: 10% auto;
  background-color: #fff;
  padding: 40px;
}
.tm_register {
  font-size: 24px;
  color: #3c3c3c;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}
.reg_title {
  display: inline-block;
  width: 80px;
  height: 50px;
  font-size: 16px;
  text-align: right;
  padding-right: 5px;
  color: #3c3c3c;
}
.register input {
  width: 340px;
  height: 35px;
  padding-left: 10px;
  outline-color: #ff0036;
}

.register input::-webkit-input-placeholder {
  color: #757575;
  font-size: 16px;
}
.register button {
  width: 100%;
  height: 50px;
  font-size: 20px;
  border-radius: 5px;
}
._register {
  margin-bottom: 20px;
  background-color: #e0c2c8;
}
.gotoLogin {
  background-color: skyblue;
}
</style>