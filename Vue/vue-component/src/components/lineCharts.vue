<template>
	<div class="main-content">
		<div v-bind:class="[echartWrap]" id="line"></div>
	</div>
</template>
<script>
	import echarts from 'echarts'
	export default {
		data() {
			return {
				echartWrap:'echart-wrap',
				opinion: [],
				javasciptData: [0, 2.3, 1.4, 3.77, 1.09, 5, 1.2, 3],
				cssData: [1, 0, 1.2, 0, 1, 3, 2.5, 3],
				nodejsData: [2, 3, 3, 2, 5, 0.3, 1.2, 2],
				xAxisOpin: ['06-24','07-08','07-24','08-04','08-24','09-04','09-24','10-04'],
				title:{  //标题
					text:'学习时间分布情况(小时)',
					textStyle: {
						color: '#666',
			        	fontSize: 12,
			        	fontWeight: 500,
			        	fontFamily:'"Microsoft YaHei","STHeiti","Open Sans",Arial,"Hiragino Sans GB","WenQuanYi Micro Hei",SimSun,sans-serif'
					},
					padding:15
				},
				tooltip:{  //指定在相对容器的位置处显示提示框，如果指定的位置无法显示则无效
					show: true,//默认为true，是否显示提示框组件，包括提示框浮层和 axisPointer
					trigger: 'axis',//触发类型，'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用；'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
			        axisPointer: {//坐标轴指示器配置项，在 trigger 为 'axis' 时有效。
		        		lineStyle:{
	        				color:'#4fa4fc'
			        	}
		        	}
				},
				legend:{//图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
			        data:['JavaScript','Css','Nodejs'],
			        right: 0,
			        padding: 10,
			       	textStyle: {
			       		// color:'red'
			       	}
			    },
			    grid: {//直角坐标系内绘图网格
			    	show: true,
			    	left: 25,
			    	right:25,
			    	bottom:30,
			    	borderColor:'#fff'
			    },
			    calculable: true,
			    xAxisStyle: {// 直角坐标系 grid 中的 x 轴
		            type : 'category',
		            boundaryGap : false,
		           	axisLabel: {//坐标轴刻度相关设置
		           		textStyle: {
                            color: "#999",
                            fontSize: 12
                        }
		           	},
		           	axisLine:{//坐标轴轴线相关设置
		                lineStyle:{
		                    color:'#fff',	                   
		                }
		            }
		        },
		        yAxis: [{// 直角坐标系 grid 中的 y 轴
		            //type : 'value'
		            position: {
		            	left: 0
		            },
		            splitLine: {
		            	show: false
		            },	
	            	axisLabel: {
		           		textStyle: {
	                        color: "#fff",
	                        fontSize: 12
	                    }
		           	},
		            axisLine:{
		                lineStyle:{
		                    color:'#fff',	                   
		                }
		            }
		        }],	
		        series: [{
		            name:'JavaScript',
		            type:'line',//图表对应系列名称
		            smooth:true,//是否平滑曲线显示
		            itemStyle: {//折线拐点标志的样式。
		            	normal: {
		            		color: '#5296FC',
		            		areaStyle: {//区域填充样式
		            			color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									  offset: 0, color: '#5296fc' // 0% 处的颜色
									},{
									  offset: 1, color: '#aeebff' // 100% 处的颜色
									}], false)
		            		}
		            	},
		            	lineStyle:{//线条样式
							color:'#5296FC'
						},
	            		emphasis: {//图形的颜色
                            color: '#5296FC'
                        }
		            }
	            },
	            {
	            	name:'Css',
		            type:'line',
		            smooth:true,
		            itemStyle: {
		            	normal: {
		            		color: '#00cc66',
		       //      		areaStyle: {
		       //      			color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									//   offset: 0, color: '#00cc66' // 0% 处的颜色
									// },{
									//   offset: 1, color: '#4cae4c' // 100% 处的颜色
									// }], false)
		       //      		},	
		            	},
		            	lineStyle:{
							color:'#00cc66'
						},
	            		emphasis: {
                            color: '#4cae4c'
                        }
                    }   
	            },{
                	name: 'Nodejs',
                	type: 'line',
                	smooth: true,
                	normal: {
	            		color: '#ff913c',
	            	},
	            	lineStyle:{
						color:'#ff913c'
					},
            		emphasis: {
                        color: '#f0ad4e'
                    }
                }]
			}
		},
		methods: {
			drawLine(id) {
				this.chart = echarts.init(document.getElementById(id))
				this.chart.setOption({
					title : this.title,
				    tooltip : this.tooltip,
				    legend: this.legend,
				    grid : this.grid,
				    calculable : this.calculable,
				    xAxis : [{
				    	type: this.xAxisStyle.type,
				    	boundaryGap: this.xAxisStyle.boundaryGap,
				    	axisLabel: this.xAxisStyle.axisLabel,
				    	axisLine: this.xAxisStyle.axisLine,
				    	data: this.xAxisOpin
				    }],
				    yAxis : this.yAxis,
				    series: [{
				    	name: this.series[0].name,
				    	type: this.series[0].type,
				    	smooth: this.series[0].smooth,
				    	itemStyle:this.series[0].itemStyle,
				    	data: this.javasciptData
				    },{
				    	name: this.series[1].name,
				    	type: this.series[1].type,
				    	smooth: this.series[1].smooth,
				    	itemStyle:this.series[1].itemStyle,
				    	data: this.cssData
				    },{
				    	name: this.series[2].name,
				    	type: this.series[2].type,
				    	smooth: this.series[2].smooth,
				    	itemStyle:this.series[2].itemStyle,
				    	data: this.nodejsData
				    }]
				    
				})
				
			}
		},
		mounted() {
			this.$nextTick(function(){
				this.drawLine('line')
			})
		}
	}
</script>
<style scoped>
	@import '../assets/css/content.css';
	.echart-wrap{
		min-width:650px;
		min-height:400px;
		position:absolute;
		top:50%;
        /*left:50%;*/
		transform:translate(0,-50%);
        transform-origin:50% 0;
        margin-left:30px;
	}
</style>
