<template>
	<div class="main-content">
		<div id="pie" v-bind:class="[echartWrap]"></div>
	</div>
</template>
<script>
	import echarts from 'echarts'
	export default{
		data() {
			return {
				echartWrap:'percent',
				legendData: ['招商银行', '广发证券', '博时基金'],
				seriesData: [
				                {value:20, name:'招商银行'},
				                {value:50, name:'广发证券'},
				                {value:50, name:'博时基金'},
				            ],
	            
				title: {
					text:'程序猿购买基金调查',
					left: 'center',
					textStyle: {
						color: '#666',
			        	fontSize: 20,
			        	fontWeight: 500,
			        	fontFamily:'"Microsoft YaHei","STHeiti","Open Sans",Arial,"Hiragino Sans GB","WenQuanYi Micro Hei",SimSun,sans-serif'
					}
				},
				tooltip:  {
			    	show: true,
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
				    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
				    },
			    series: {
		            name:'基金比值',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center',
		                    
		                },
		                emphasis: {
		                    show: true,
		                    formatter: '{d}%',
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: '500',
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            itemStyle: {
	            		normal: {
	       //      			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{//圆形内颜色
								//   offset: 0, color: '#59eaff' // 0% 处的颜色
								// },{
								// 	offset: 0.5, color: '#4d93ff' //50% 处的颜色
								// },{
								//   offset: 1, color: '#b5a2ff' // 100% 处的颜色
								// }], false)
							
	            		}
		            },
			    }
			}
		},
		methods: {
			drawPie(id) {
				this.chart = echarts.init(document.getElementById(id))
				this.chart.setOption({
					color:['#48cda6','#fd87ab','#11abff','#ffdf33','#968ade'],//自定义颜色数组
					title: this.title,
					tooltip: this.tooltip,
				    legend: {
				    	orient: this.legend.orient,
				    	x: this.legend.x,
				    	data: this.legendData
				    },
				    series: [{
				    	name: this.series.name,
				    	type: this.series.type,
				    	radius: this.series.radius,
				    	avoidLabelOverlap: this.series.avoidLabelOverlap,
				    	label: this.series.label,
				    	labelLine: this.series.labelLine,
				    	// itemStyle: this.series.itemStyle,
				    	data: this.seriesData
				    }]
				})
			}
		},
		mounted() {
			this.$nextTick(function(){
				this.drawPie('pie')
			})
		}
	}
</script>
<style>
	@import '../assets/css/content.css';
	.percent{
		width:650px;
		height:400px;
		position:absolute;
		top:50%;
		transform:translate(0,-50%);
        transform-origin:50% 0;
        margin-left:30px;
	}
</style>