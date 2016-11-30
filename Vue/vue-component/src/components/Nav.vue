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
					{name:'走势图',link:'charts'}
				],
				isActive:true
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
		
		color: rgba(0,204,102,.8);
	    size: 14px;
	}
	.nav-item a{
		padding:0 50px;
		display: block;
		text-decoration: none;
	}
	.nav-item a:hover {
	  color: rgba(0,204,102,1);
	  background-color: #fafafa;
	  cursor: pointer;
	}
	.nav-item a.router-link-active {
	  color: rgba(0,204,102,1);
	  background-color: #fafafa;
	}
</style> 