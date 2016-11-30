<template>
	<div class="main-content">
		<div v-bind:class="{echartClass:echartWrap}"></div>
	</div>
</template>
<script>
	import echarts from 'echarts'
	export default {
		data() {
			return {
				echartWrap:'echart-wrap'
			}
		}
	}
</script>
<style>
	.main-content{
		position:relative;
		margin-top:60px;
		margin-left:230px;
		height:auto;
	}
	.echart-wrap{
		
	}
</style>
