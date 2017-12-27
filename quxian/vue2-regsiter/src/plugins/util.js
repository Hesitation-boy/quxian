export default{
  install(Vue,options)
  {
    Vue.prototype.msgToJS = function (func,uin,value) {
      alert(func+'-'+uin+'-'+value);
    }
  }
}