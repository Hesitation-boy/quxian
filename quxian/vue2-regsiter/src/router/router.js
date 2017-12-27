import App from '../App'
import register from '../views/register/register'

// const register = r => require.ensure([], () => r(require('../views/register/register')), 'register')
export default[{
	path:'/',
	component:App,
	children:[
		{
			path:'',
			redirect:'/register'
		},
		// 首页
		{
			path:'/register',
			component:register
		}
	]
}]
