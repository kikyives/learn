<template>
	<div class="main-content">
		<!--调用组件-->
		<tabs v-bind:flag="tabShowFlag" :title="tabTitle" :tabs="tabData">
			<transition>
				<div class="tab-item" v-if="tabData[0].showFlag > 0">
					{{tabData[0].content}}
				</div>  
				<div class="tab-item" v-if="tabData[1].showFlag > 0">
					{{tabData[1].content}}
				</div>
				<div  class="tab-item" v-if="tabData[2].showFlag > 0">
					{{tabData[2].content}}
				</div>
				<!--<component :is='currentView'></component>-->
			</transition >
		</tabs> 
	</div> 
</template>   
<script>
	import tabs from './branch/tabbar1.vue'
	export default {
		data() {      
			return {
				tabShowFlag: true,
				tabTitle: 'tab切换(适用于简单场景)，例如渲染一个小片段，数据处理不多',
				tabData: [
					{
						name: 'Home',
						content:'这是tab-1',
						showFlag: 1
					},{
						name: 'Profile',
						content:'这是tab-2',
						showFlag: -1
					},{
						name: 'Messages',
						content:'这是tab-3',
						showFlag: -1
					}
				],
				// currentView: Home,
				// components: {
				// 	Home: {/*动态组件*/},
				// 	Profile: {},
				// 	Messages: {}
				// }
			}
		},
		components: {
			tabs
		},	
	}
</script>
<style>
	.tab-item{
		padding:50px;
		font-size:20px;
	}
</style>