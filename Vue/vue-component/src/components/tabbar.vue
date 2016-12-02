<template>
	<div class="main-content">
		<div class="center-wrap ">
			<ul class="nav nav-tabs">
			  <li :class="{'active': index === selected}" v-for="(tab,index) in tabs" ><a href="javascript:;" @clink="getList(index)">{{tab.name}}</a></li>
			</ul> 
		</div>	
	</div> 
</template> 
<script>
	export default{
		data() {
			return {
				tabs:[
					{name: 'Home'},
					{name: 'Profile'},
					{name: 'Messages'}
				],
				selected: 0
			}
		},
		methods:{
			getList(index){
				this.selected = index;
			}
		}
	}
</script>