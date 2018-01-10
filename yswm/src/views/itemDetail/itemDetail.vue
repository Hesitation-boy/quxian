<template>
	<section>
		<head-top :detail-title="detailTitle"></head-top>
	</section>
</template>



<script>
import head from '../../components/header/header'
export default{
	data(){
		return {
			detailTitle:"项目详情"
		}
	},
	components:{
		'head-top':head,
	}
}
</script>

<style lang="scss" scoped>

</style>