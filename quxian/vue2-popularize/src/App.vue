<template>
  <div>
      <!-- 缓存部分页面和组件 -->
        <transition name="router-fade" mode="out-in">
          <keep-alive><router-view v-if="$route.meta.keepAlive"></router-view></keep-alive>
          </transition>
          <transition name="router-fade" mode="out-in">
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
        <svg-icon></svg-icon>
    </div>
</template>

<script>
    import svg from './components/common/svg'
    export default{
      data(){
        return{}
      },
      components:{
            'svgIcon':svg
      },
        methods:{
        }
    }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import './sass/base';
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }

</style>
