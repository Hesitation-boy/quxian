import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
// import 'lib-flexible/flexible.js'
import 'lib-flexible'
import axios from 'axios'


Vue.use(VueRouter);



let router=new VueRouter({
	mode:'hash',
	routes 
})

new Vue({
	router
}).$mount('#app');
