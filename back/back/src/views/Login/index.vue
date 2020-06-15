<template>
   <div class="login-container">
      <h2>中测新宇后台管理系统</h2>
      <div class="login-box">
          <!-- rules用于登录时做验证与input中prop属性一起 -->
          <div class="login">
            <div :class="[{'click':isClick}]" @click="trueClick()">登陆</div>
            <div :class="[{'click':!isClick}]" @click="falseClick()">注册</div>
          </div>
          <!-- 登陆事件 -->
         <div class="content" v-if="isClick">
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
            <el-form-item  prop="name">
              <el-input v-model="loginForm.name" placeholder="请输入用户名">
                  <i slot="prefix" class="el-icon-s-custom"></i>
              </el-input>
            </el-form-item>
            <el-form-item   prop="code">
              <el-input v-model="loginForm.code" placeholder="请输入密码">
                  <i slot="prefix" class="el-icon-s-check"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button style="width:100%;" type="primary"  @click="login()">登录</el-button>
            </el-form-item>
          </el-form>
         </div>
         <!-- 注册事件 -->
         <div class="content" v-else>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <el-form-item prop="user">
                <el-input v-model.number="ruleForm.user" placeholder="请输入用户名">
                  <i slot="prefix" class="el-icon-s-custom"></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码">
                  <i slot="prefix" class="el-icon-s-check"></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" placeholder="请输入确认密码">
                  <i slot="prefix" class="el-icon-coordinate"></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width:100%;"  @click="submitForm('ruleForm')">提交</el-button>
              </el-form-item>
            </el-form>
         </div>
      </div>
    </div>
</template>

<script>
export default {
 name:'login',
 data(){
  //  注册事件的校验
   var checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
      };
   var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
     return{
        //  显示切换
         isClick:true,
        //  登陆
         loginForm:{
             name:'',//用户名
             code:''//密码
         },
         loginFormRules: {
            name: [
              { required: true, message: '用户名必填' },
              { pattern:  /^[a-zA-Z0-9_-]{4,16}$/, message: '用户名应为4到16位（字母，数字，下划线，减号）' }
            ],
            code: [
              { required: true, message: '密码必填' }
            ]
         },
        // 注册
         ruleForm: {
          user:'',
          pass: '',
          checkPass: '',
        },
        rules: {
          user: [
             { required: true, message: '用户名必填' },
              { pattern:  /^[a-zA-Z0-9_-]{4,16}$/, message: '用户名应为4到16位（字母，数字，下划线，减号）' }
          ],
          pass: [
            { validator: validatePass,}
          ],
          checkPass: [
            { validator: validatePass2 }
          ],
        }
     }
 },
  methods: {
    // 登陆的事件
    login () {
        this.$refs.loginFormRef.validate((valida)=> {
            if(valida){
                //console.log(this)
                    this.$router.push('/Home')
            }
        })
    },
    // 注册的事件
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(this.ruleForm.pass!==this.ruleForm.checkPass){
            alert('密码与验证码不一致')
            return false
          }else{
            if (valid) {
            alert('注册成功');
            this.isClick=true;
          } else {
            console.log('注册失败');
            return false;
          }
          }
        });
      },
    // 两个 按钮的切换
    trueClick(){
      this.isClick=true
    },
    falseClick(){
      this.isClick=false
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
  height:730px;
  background-color: gray;
  background: url(./bgi.png) no-repeat;
  background-size: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  position: relative;
   h2{
     position: absolute;
     top:100px;
     left:50%;
      transform: translate(-50%);
     font-size: 40px;
     text-align: center;
     color:#fff;
     text-shadow: 5px 5px 5px #333;
     line-height: 70px;
     letter-spacing: 12px;
   }
  .login-box{
    width:410px;
    height:310px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .login{
      position: absolute;
      top:0px;
      left:0px;
      width: 100%;
      text-align: center;
      line-height: 40px;
      div{
        float: left;
        box-sizing: border-box;
        border-bottom:1px solid #9bc8f6;
        width: 50%;
        height:40px;
      }
    }
    .content{
      width: 75%;
      margin-top: 50px;
      .el-form{
        width: 100%;
    }
    }
  }
}

.click{
  background-color: #409EFF;
  color:#fff;
}
</style>