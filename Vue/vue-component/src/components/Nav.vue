<template>
	<div class="nav-list">
		<ul class="nav-left">
			<li class="nav-item" v-for="(item,index) in items">
				<router-link v-bind:to="'/' + item.link" v-bind:class="{active: isActive}">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				items:[
					{name: '折点图', link: 'lineCharts'},
					{name: '环形图', link: 'pieCharts'},
					{name: 'tab切换(简单场景)', link: 'tabs'}
				],
				isActive:[true,false,false]
			}
		}
		
	}
</script>
<style>
	*{
		margin:0;
		padding:0;
	}
	ul{list-style:none}
	.nav-list{
		position: fixed;
		left: 0;
		bottom: 0;
		top: 60px;
		line-height: 40px;
		background-color: #fff;
		border-right:1px solid rgba(16, 16, 16, 0.1);
		overflow-y: auto;
		z-index: 15;
		font-family: "Microsoft Yahei", sans-serif;
	}
	.nav-left{
		width:230px;
	}
	.nav-item{
	    color: #4cae4c;
	}
	.nav-item a{
		font-size: 14px;
		color: #4cae4c;
		padding:0 50px;
		display: block;
		text-decoration: none;
	}
	.nav-item a:hover {
	  color: #00cc66;
	  background-color: #fafafa;
	  cursor: pointer;
	}
	.nav-item a.router-link-active {
	  color: #00cc66;
	  background-color: #fafafa;
	}
</style> 