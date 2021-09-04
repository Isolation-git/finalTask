<template>
  <div class="container">
    <div class="login">
      <div class="login_way">账号密码登录</div>
      <div class="login_username">
        <img src="../assets/images/login_un.png" alt="" />
        <input type="text" placeholder="请输入用户名" v-model="username" />
      </div>
      <div class="login_password">
        <img src="../assets/images/login_pw.png" alt="" />
        <input type="password" placeholder="请输入密码" v-model="password" />
      </div>
      <button class="_login" @click="login">登录</button>
      <button class="login_to_reg" @click="gotoRegister">免费注册</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // console.log(this.username, this.password);
      if (this.username.length < 3) {
        alert("用户名应大于三位！");
      } else if (this.password.length < 6) {
        alert("密码应不少于6位！");
      } else {
        axios({
          method: "post",
          url: "http://localhost:3456/api/login",
          params: {
            username: this.username,
            password: this.password,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }).then((res) => {
          // console.log(res.data);
          if (res.data.message != "OK") {
            alert(res.data.message);
            console.log(window.localStorage);
          } else {
            alert("登录成功！");
            window.localStorage.setItem("token", res.data.token);
            window.localStorage.setItem("startTime", new Date().getTime());
            window.localStorage.setItem("userId", res.data.user.username);
            // console.log(res.data);
            console.log(window.localStorage);
            this.$router.push("/home/username=" + res.data.user.username);
          }
        });
      }
    },
    gotoRegister() {
      this.$router.push("/register");
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

.login {
  padding: 40px;
  width: 500px;
  height: 400px;
  margin: 10% auto;
  background-color: #fff;
}
.login input {
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  padding-left: 50px;
  font-size: 18px;
  outline-color: #ff0036;
}
.login img {
  position: absolute;
  top: 1px;
  left: 1px;
}
.login input::-webkit-input-placeholder {
  color: #757575;
  font-size: 18px;
}
.login_way {
  font-size: 20px;
  color: #3c3c3c;
  font-weight: 700;
  margin-bottom: 20px;
}
.login_username {
  position: relative;
}
.login_password {
  position: relative;
}
.login ._login {
  width: 100%;
  height: 50px;
  background-color: #ff0036;
  margin-bottom: 20px;
  font-size: 22px;
  color: #fff;
  border-radius: 5px;
}
.login .login_to_reg {
  width: 100%;
  height: 50px;
  background-color: #e0c2c8;
  font-size: 22px;
  border-radius: 5px;
}
</style>