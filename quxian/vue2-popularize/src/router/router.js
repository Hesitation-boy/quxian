import App from '../App'
import popularize from '../views/popularize/popularize'


export default[{
	path:'/',
	component:App,
	children:[
		// 地址为空时跳转register页面
		{
			path:'',
			redirect:'/popularize'
		},
		{
		// 首页
			path:'/popularize',
			component:popularize
		}

	]
}]