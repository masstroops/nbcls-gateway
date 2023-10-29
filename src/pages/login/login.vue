<template>
  <breadcrumbNav />
  <div class="w-[500px] my-[40px] mx-auto p-[35px] box_shadow relative">
    <template v-if="loginSuccess">
      <div class="inputBox">
        <img class="inputBox-img" src="@/assets/img/admin.png" alt="">
        <input v-model="username" type="text" class="inputBox-input" placeholder="请输入用户名">
      </div>
      <div class="inputBox">
        <img class="inputBox-img" src="@/assets/img/password.png" alt="">
        <input v-model="password" @keyup.enter="login" type="password" class="inputBox-input" placeholder="请输入密码">
      </div>
      <div class="box2">
        <span @click="forgetBtn" class="box2-forget">忘记密码？</span>
      </div>
      <button @click="login" :disabled="disabled" class="loginbtn">登录</button>
      <div class="box3">
        还没有帐号？<span @click="register" class="box3-register">去注册>></span>
      </div>
    </template>
    <template v-else>
      <div @click="logout" class="logout"><img src="@/assets/img/logout.png" alt="">退出</div>
      <img class="userimg" src="@/assets/img/parsePicServlet.jpg" alt="">
      <div class="realname">{{realName}} 你好!</div>
      <button @click="houtai" class="loginbtn">进入后台</button>
    </template>
  </div>

  <a-modal :visible="registerVisible" title="用户注册" :centered="true" width="680px" @ok="submit" @cancel="close">
    <!-- 个人信息注册 -->
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      ref="form"
    >
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="Username"
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.username" class="w-full" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import breadcrumbNav from '@components/breadcrumbNav.vue'
import { onMounted, reactive, ref } from 'vue'
import { message, notification } from 'ant-design-vue'
import { login as loginReq, getUser } from '@/api/user'

const loginSuccess = ref(localStorage.NBCLSAUTH ? false : true)
const username = ref('')
const password = ref('')
const realName = ref<any>(localStorage.realname)
const disabled = ref(false)

onMounted(() => {
  
})

const login = () => {
  if (!username.value || !password.value) {
    message.warning('请输入帐号和密码')
    return
  }
  let parameter = {
    username: username.value,
    password: password.value
  }
  disabled.value = true
  loginReq(parameter).then(res => {
    disabled.value = false
    if (res.code===200) {
      let token = res.token
      localStorage['NBCLSAUTH'] = token
      // window.open(`http://139.196.83.198:89?auth=${token}`)
      getUser().then(res => {
        if (res.code===200) {
          notification.success({
            message: '欢迎',
            description: `${res.user.nickName}，欢迎回来`,
            duration: 2
          })
          loginSuccess.value = false
          localStorage['realname'] = res.user.nickName
          realName.value = localStorage['realname']
        }
      })
    } else {
      notification.error({
        message: '登录失败',
        description: res.msg
      })
    }
  }).catch(err => {
    disabled.value = false
    notification.error({
      message: '登录失败',
      description: err.msg
    })
  })
}

const forgetBtn = () => {}

const registerVisible = ref(false)
const register = () => {
  registerVisible.value = true
}
const form = ref()
const formState = reactive<any>({
  username: '',
  password: '',
})
const submit = () => {
  form.value.validateFields().then((values:any) => {
    console.log(values);
    
  }).catch()
}
const close = () => {
  registerVisible.value = false
}
const logout = () => {
  loginSuccess.value = true
  realName.value = ''
  localStorage.removeItem('realname')
  localStorage.removeItem('NBCLSAUTH')
}
const houtai = () => {}
</script>

<style lang="less" scoped>
.box_shadow {
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13);
}
.inputBox {
  width: 100%;
  height: 64px;
  border-radius: 6px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  &-img {
    margin: 0 10px 0 28px;
    width: 21px;
  }

  &-input {
    border: none;
    outline: none;
    height: 58px;
    font-size: 20px;
    background: #f8f8f8;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 60px;
    color: #000;
    width: 371px;
    letter-spacing: 2px;
    opacity: .7;
    padding: 1px 2px;
  }
}

.box2 {
  line-height: 44px;
  margin-top: 16px;
  margin-bottom: 30px;
  font-size: 14px;
  color: #2c3e50;
  text-align: right;

  &-forget {
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #0336db;
    letter-spacing: 4px;
    cursor: pointer;
  }
}

.loginbtn {
  width: 100%;
  height: 48px;
  background: rgba(81, 155, 205, .8588235294117647);
  border-radius: 6px;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  line-height: 45px;
  color: #fff;
  letter-spacing: 4px;
  border: 0;
  cursor: pointer;
}

.box3 {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 25px;

  &-register {
    color: #1890ff;
    cursor: pointer;
  }
}

.userimg {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 20px solid #ffffff;
  margin: 0 auto;
  display: block;
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.13);
}

.realname {
  text-align: center;
  margin: 10px 0 30px;
  font-size: 18px;
  color: #888;
  user-select: none;
}
.logout {
  background: rgba(81, 155, 205, .8588235294117647);
  color: #fff;
  width: 60px;
  height: 22px;
  line-height: 22px;
  border-radius: 5px;
  text-align: center;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 3px;
  }
}
</style>