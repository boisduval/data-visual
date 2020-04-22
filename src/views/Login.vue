<template>
  <div class="login flex-row flex-center flex-column-center">
    <div class="content-box" v-if="!loading">
      <LoginBorder>
        <div class="content flex-column">
          <p class="title font-medium">
            令牌登记说明
          </p>
          <div class="tips font-small">
            <p>
              1.进入此说明界面证明您并未通过令牌身份验证，需要进行令牌身份信息登记。
            </p>
            <p>
              2.令牌身份信息登记之后，管理员将在最迟48小时之后给与身份审核结果。
            </p>
            <p>
              3.审核通过刷新页面则进入到中心首页，审核未通过在该页面会返回未通过的原因，请更正之后再试。
            </p>
            <p>反馈信息：<span style="color: #f59b23">令牌身份未登记</span></p>
          </div>
          <p class="title font-medium">
            令牌身份登记信息
          </p>
          <div class="form">
            <div class="form-item flex-row flex-column-center">
              <label for="name" class="font-small label">登记姓名</label>
              <input
                type="text"
                class="flex value font-small"
                v-model="formData.name"
                id="name"
              />
            </div>
            <div class="form-item flex-row flex-column-center">
              <label for="tel" class="font-small label">登记电话</label>
              <input
                type="text"
                class="flex value font-small"
                v-model="formData.phone"
                id="tel"
              />
            </div>
            <div class="form-item flex-row flex-column-center">
              <label for="password" class="font-small label">
                <span style="color: rgba(0,0,0,0)">占位</span>密码
              </label>
              <input
                type="text"
                class="flex value font-small"
                v-model="formData.checkcode"
                id="password"
              />
            </div>
            <div class="form-item flex-row" style="align-items: baseline;">
              <label for="reason" class="font-small label">登记原因</label>
              <textarea
                class="flex value font-small"
                maxlength="200"
                style="resize:none;height:50px;padding: 3px 2px;"
                id="reason"
                v-model="formData.reason"
              >
              </textarea>
            </div>
          </div>
          <div class="button-group flex-row flex-center">
            <div
              class="submit font-small"
              style="margin-right: 1%"
              @click="submit"
            >
              提交登记信息
            </div>
            <div class="reset font-small" @click="clearData">
              重置登记信息
            </div>
          </div>
        </div>
      </LoginBorder>
    </div>
  </div>
</template>

<script>
import { Loading } from "element-ui";

export default {
  name: "Login",
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        reason: "",
        checkcode: ""
      },
      loading: false
    };
  },
  methods: {
    clearData() {
      this.formData.name = "";
      this.formData.phone = "";
      this.formData.reason = "";
    },
    submit() {
      var url = "/api/Statement/RegisterTokeninformation";
      this.$axios
        .post(url, this.formData)
        .then(res => {
          if (res.data.code === 0) {
            this.$message.success(res.data.msg);
          } else if (res.data.code === 1001) {
            this.$message.warning(res.data.msg);
          } else if (res.data.code === 1000) {
            localStorage.setItem("token", res.data.token);
            this.loading = true;
            let loadingInstance = Loading.service({
              fullscreen: true,
              text: "登陆成功，正在跳转...",
              background: "rgba(0, 0, 0, 0)",
              customClass: "my-loading"
            });
            setTimeout(() => {
              loadingInstance.close();
              this.$router.push("/");
            }, 1000);
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
.login {
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  /*background-position: center center;*/
  /*background-image: url("../assets/img/bg.png");*/
  height: 100%;
  /*min-width: 1400px;*/
  overflow: hidden;
  position: relative;
  min-width: 1000px;
}
.content-box {
  width: 45%;
}
.content {
  height: 100%;
  color: #46a6b5;
}
.title {
  text-align: center;
}
.tips {
  margin: 3% 0;
}
.form {
  margin-top: 1%;
}
.form-item {
  margin-bottom: 10px;
}
.label {
  margin-right: 5px;
}
.value {
  border: 1px #46a6b5 solid;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: #80ffff;
  padding: 3px 5px;
}
.button-group {
  color: #fff;
  margin-top: 1%;
}
.button-group > div {
  background-color: #189bd5;
  border-radius: 3px;
  padding: 3px 5px;
  cursor: pointer;
}
</style>
