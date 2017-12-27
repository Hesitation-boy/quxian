<template>
 <div>
  <header class="header">
   <section class="goback" @click="$router.go(-1)">
    <svg width="100%" height="100%" class="svg" fill="#fff">
     <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back" ></use>
   </svg>    
 </section>
 <span>邀请注册</span>
</header>
<section class="wrapper">
 <img src="//static.qiangcaibao.com/images/register_bg.jpg" alt=""/></section>
 <section class="form-wrap">
  <alert-tip :tipTitle="tipTitle" v-show="showAlert" ></alert-tip>
  <alert-window v-show="alertWindow"  @closewindow="closewindow"></alert-window>

  <div class="form-conent" >
   <form action="" class="form" id="loginForm">
    <input id="mobile" type="tel"  placeholder="输入手机号接受邀请"maxlength="11" name="mobile" autocomplete="off" v-model="phoneNumber">    
    <span class="get_code">
     <input id="code"   type="tel"  placeholder="输入验证码" maxlength="6"  autocomplete="off"  v-model="codeNumber" >
     <button type="button" class="sendCode"  @click="getVerifyCode()" :disabled="disabledState">
      <span v-show="!showCodeButton">{{sendCodeBtnVal}}</span>
      <span v-show="showCodeButton">{{computedTime}}S后重新发送</span>
    </button>
  </span> 
  <a class="submit" @click="mobileLogin()" >
   <input id="submit" type="button"  value="接受邀请并完成注册" :disabled="submitDisabledState"> 
 </a >
</form>
</div>
<section class="advantage">
 <ul>
  <li>
   <img src="//static.qiangcaibao.com/images/arrival.png" alt="">
   <span>
    <p>信用卡取现 </p >
    <p>实时到账</p >   
  </span>
</li>
<li>
 <img src="//static.qiangcaibao.com/images/audit.png" alt="">
 <span>
  <p>一天取5万  </p >
  <p>无需审批 </p >   
</span>     
</li>
<li>
 <img src="//static.qiangcaibao.com/images/shield.png" alt="">
 <span>
  <p>费率低至0.5%   </p >
  <p>安全可靠</p >   
</span>     
</li>
</ul>
</section>
</section>

<section class="mask" v-show="alertWindow">
  
</section>
</div>
</template>

<script>
import tip from  '../../components/common/alertTip.vue'
import alertWindow from  '../../components/common/alertWindow.vue'
import axios from 'axios'
 import {hex_md5} from '../../plugins/md5.js' //注意路径
 import {Terminal} from '../../plugins/appdown.js'
 export default{
  data(){
   return {
                phoneNumber: null, //电话号码
                mobileCode: null,  //短信验证码
                computedTime: 60,  //倒数记时
                tipTitle: null,    //提示的内容
                showAlert :false,  //显示提示组件
                codeNumber:null,   //验证码
                sendCodeBtnVal:'获取验证码',
                disabledState:false,//控制按钮的状态是否点击
                timers:null,
                showCodeButton:false,//
                paramObject:{},
                paramArray:[],
                submitDisabledState:false,
                tokenInfo:null,
                downUrl:null,
                alertWindow:false
              }
            },
            components:{
             'alertTip':tip,
             'alert-window':alertWindow
           },
           mounted(){
           },
           computed:{
            //判断手机号码正则
            rightPhoneNumber(){
             return /^1\d{10}$/gi.test(this.phoneNumber)
           },       
            // 验证码教研
            mobileCodeReg(){
             return /^\d{4}$/.test(this.codeNumber)
           },
         },
         methods:{
           hideAlertTip(){
            setTimeout(()=>{
             this.showAlert=false;
           },2000)
          },
          closewindow(){
            this.alertWindow=false
          },
          signFun(){
            this.paramArray = [];
            let arr = Object.keys(this.paramObject).sort();
            for(let  i=0 ;i<arr.length;i++){                     
             this.paramArray+= arr[i]+this.paramObject[arr[i]];
           }
           return  hex_md5(this.paramArray).toUpperCase()
         },  
         getToken(name){
          let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
          let  r = window.location.search.substr(1).match(reg);
          if(r!=null)return unescape(r[2]); return '';
        } ,
            // 为空验证
            mobileLogin(){
             if(this.phoneNumber){
              if(this.rightPhoneNumber){
               if(this.codeNumber){
                if(this.mobileCodeReg){
                 this.submitDisabledState=true;
                 this.submitDataFun();
               }else{
                 this.showAlert = true;
                 this.tipTitle='请输入4位数字验证码！';
                 this.hideAlertTip(); 
               }
             }else{
              this.showAlert = true;
              this.tipTitle='请输入验证码！';
              this.hideAlertTip(); 
            }
          }else{
           this.showAlert = true;
           this.tipTitle='您的手机号格式输入有误！';
           this.hideAlertTip(); 
           return              
         }
       }else{
        this.showAlert = true;
        this.tipTitle='请输入手机号码！';
        this.hideAlertTip();
        return 
      }
    },
            //获取短信验证码
            getVerifyCode(){
              console.log(111);
             if(this.rightPhoneNumber){
              if (!this.timers) {
               this.showCodeButton = true;
               this.timers = setInterval(() => {
                if (this.computedTime > 0 && this.computedTime <= 60) {
                 this.computedTime--;
                 this.disabledState=true;
               } else {
                 this.showCodeButton = false;
                 this.sendCodeBtnVal="重新获取验证码"
                 clearInterval(this.timers);
                 this.computedTime=60;
                 this.timers = null;
                 this.disabledState=false;
               }
             }, 1000)
             }
             this.paramObject={
               mobile:this.phoneNumber,
               captcha:1
             }
             let  param = {
               "mobile":this.phoneNumber,
               "captcha":"1",
               "sign":this.signFun()
             }
             axios.post("http://api.qiangcaibao.com/user/register/sms/h5",param)
             .then(res => {  
               if(res.data.code!=2000){
                if(res.data.code==2027){
                  this.alertWindow=true;
                }else{
                  this.showAlert = true;
                  this.tipTitle=res.data.message;
                  this.hideAlertTip();                 
                }

              }

            })
             .catch(err => {
               console.log(err)
             })
           }else{
            if(!this.phoneNumber){
             this.showAlert = true;
             this.tipTitle='请输入手机号码！';
             this.hideAlertTip();
           }else{
             this.showAlert = true;
             this.tipTitle='您的手机号输入有误！';
             this.hideAlertTip();
           }
         }
       },

       submitDataFun(){
         this.paramObject={
          mobile:this.phoneNumber,
          sms:this.codeNumber,
          password:window.btoa(window.encodeURIComponent(this.codeNumber)),
          referrerToken:this.getToken('token')
        }
        let param ={
          "mobile":this.phoneNumber,
          "sms":this.codeNumber,
          "password":window.btoa(window.encodeURIComponent(this.codeNumber)),
          "referrerToken":this.getToken('token'),
          "sign":this.signFun()
        }
        let config = {
          method:'post',
          url: "http://api.qiangcaibao.com/user/register/h5",
          data:param,
          headers: {'x-v': this.getToken('version')}
        }
        axios(config)
        .then(res => {  
          if(res.data.code !=2000 && res.data.code !=2026){
           this.submitDisabledState=false;  
           this.showAlert = true;
           this.tipTitle=res.data.message;
           this.hideAlertTip(); 
         }else{

          if(res.data.code ==2026){
            this.showAlert = true;
            this.tipTitle=res.data.message;
            this.hideAlertTip();
          }
          setTimeout(()=>{
           this.submitDisabledState=true; 
           let isThis = Terminal.platform();
           if(isThis.Android){
            window.location='http://fir.im/qx360';
          }else if(isThis.iPhone || isThis.iPad){
            window.location='http://fir.im/qx360';
          }
        },2000)
        }
      })
        .catch(err => {
          console.log(err)
        })             
      }
    }
  }
  </script>

  <style lang="scss" scoped>
  @import '../../sass/base';
  *{ margin:0; padding:0;}
  input{
   outline:none;
 }
 .header{
   width:100%;
   height:90px;
   text-align: center;
   line-height: 90px;
   background-color: #f07823;
   .goback{
    width:40px;
    height:40px;
    display: inline-block;
    position: relative;
    position: absolute;
    top:0;
    left:0; 
    .svg{
     position: absolute;
     top:50%;
     left:30px; 
   }
 }
 span{
  font-size: 32px;/*px*/
  color: #fff; 
}
}
.wrapper{
 width:100%;
 height:auto;
 font-size:0;
 img{
  width:100%;
  height: 100%;
  margin:0;
  padding:0;
  vertical-align: middle;
  display:block;
  border:none;
}
}
.form-wrap{
 width:100%;
 height:750px;
 background: url(//static.qiangcaibao.com/images/register_bg2.jpg);
   text-align: center;
   position: relative;
   .form-conent{
    width:93.333%;
    background-color: #fff;
    display: inline-block;
  border-radius: 20px; /*px*/
  margin-top:40px;
  text-align: center;
  .form{
   padding:12px 50px 0 50px;
   text-align: center;
   #mobile{
    padding:47px 0;
    display: inline-block;
    width:100%;
    font-size:28px;/*px*/
    border:none;
    border-bottom: 1px solid #ebebeb;/*px*/
  }
  .get_code{
    width:100%;
    border-bottom: 1px solid #ebebeb;/*px*/
    padding-bottom:1px;/*px*/
    display: inline-block;
    #code{
     padding:47px 0;
     width:63%;
     font-size:28px;/*px*/
     display: inline-block;
     border:none;
   }
   .sendCode{
     padding:47px 0;
     width:35%;
     display: inline-block;
     border:none;
     background-color: #fff;
     text-align: right;
     span{
      font-size:28px;/*px*/
      color: #f58d11;
    }
  }   
}
.submit{
  width:100%;
  text-align: center;
    margin:25px 0  ; /*px*/
    display:inline-block;
    #submit{
     display: inline-block;
     width:68.7%;
     height:108px;
     background-color: #f2c12c;
     font-size:32px; /*px*/
     color: #fff;
     border-radius: 50px;
     border:none;

   }
 }

}
}
}
.advantage{
 margin-top:65px;
 position: absolute;
 z-index: 10px;
 width:100%;
 ul{
  padding: 0 25px;
  li{
   display: inline-block;
   width:23.5%;
   font-size:24px;/*px*/
   color:#fff;
   margin:0 26px;
   span{
    margin-top:24px;
    line-height: 30px;
    display: inline-block;
    p{
     color:#fff;
   }
 }
 img{
  width:58px;
  height:58px;
}
}
}
}

  .mask{
    position: fixed;
    top: 0px;
    width: 100%;
    filter: alpha(opacity=50);
    background-color: #000;
    z-index: 100;
    left: 0px;
    opacity: 0.5;
    height: 100%;
  }

</style>