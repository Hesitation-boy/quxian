import App from '../App'


//首页
const index = r => require.ensure([], () => r(require('../views/index/index')), 'index')


//项目详情
const itemDetail = r => require.ensure([], () => r(require('../views/itemDetail/itemDetail.vue')), 'itemDetail')

export default[{
	path:'/',
	component:App,
	children:[
		{
			path:'',
			redirect:'/index'
		},
		// 首页
		{
			path:'/index',
			component:index
		},
		//项目详情
		{
			path:'/itemDetail',
			component:itemDetail
		}
	]
}]
