<template>
	<tabbar class="tabbar">
		<div class="title">{{title}}</div>
		<tabbar-item class="search">
			<img solt="icon" alt="../assets/image/actionbar_search_icon.png">
		</tabbar-item>
	</tabbar>
</template>

<style>
	.tabbar{
		background:#00cc66;
		height:50px;
		position:relative;
	}
	.search{
		position:absolute;
		right:5px;
		top:5px;
		z-index:999;
	}
	.title{
		text-align:center;
		margin:auto;
		color:white;
		line-height:50px;
		font-size:18px;
	}

</style>

<script>
	import Tabbar from 'vux/dist/components/tabbar'
	import TabbarItem from 'vux/dist/components/tabbar-item'
		export default{
			name: 'AppHeader',
			components:{
				Tabbar,
				TabbarItem
			},
			data(){
				return{
					title:'综合'
				}
			},
			methods: {
				resultClick(item){
					alert('you click the result item: ' + JSON.stringify(item))
				},
				getResult(val){
					this.result = val
				}
			}
		}
</script>