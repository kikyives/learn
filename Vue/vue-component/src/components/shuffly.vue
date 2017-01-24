<template>
	<div class="main-content">
		<div class="center-wrap">
			<ul class="shuffly">
				<template  v-for="(img, index) in imgData" >
					<li class="shuffly-list" v-if="imgId == index" v-on:mouseover="showPrevNext" v-on:mouseout="hidePrevNext">
					<!-- <a href="{{img.href}}" title="{{img.title}}"> --><img :src="img.url" alt="img.title"><!-- </a> -->
					</li>
				</template>
			</ul>		
			<ul class="dot">
	            <li :class="{'on': imgId == 0}" @click="showImgOne"></li>
	            <li :class="{'on': imgId == 1}" @click="showImgTwo"></li>
	            <li :class="{'on': imgId == 2}" @click="showImgThree"></li>
	        </ul>
	        <a v-show="haveArrow"  class="prev" v-bind:class="{showT: isShow}" v-on:mouseover="showPrevNext" v-on:mouseout="hidePrevNext" @click="pervFun"></a>
	        <a v-show="haveArrow" class="next" v-bind:class="{showT: isShow}" v-on:mouseover="showPrevNext" v-on:mouseout="hidePrevNext" @click="nextFun"></a>
		</div>
	</div>	
</template>
<script>
	export default {
		mounted() {
			this.$nextTick(function(){
				let _this = this;
				let timer = setInterval(function(){
					if(_this.imgId >= 0 && _this.imgId < _this.imgData.length - 1){
						_this.imgId = parseInt(_this.imgId) +1
					}else if(_this.imgId == _this.imgData.length - 1){
						_this.imgId = 0
					}
				},3000)
				//clearInterval(timer);
			})
		},
		methods: {
			showPrevNext: function() {
				this.haveArrow = true
			},
			hidePrevNext: function() {
				this.haveArrow = false
			},
			pervFun: function() {
				let _this = this;
				if(_this.imgId > 0 && _this.imgId < _this.imgData.length){
					_this.imgId = parseInt(_this.imgId) - 1;
					// console.log(_this.imgId)
				}else if(_this.imgId == 0){
					alert('已经是第一张')
				}				
			},
			nextFun: function() {
				let _this = this;
				if(_this.imgId >= 0 && _this.imgId < _this.imgData.length - 1){
					_this.imgId = parseInt(_this.imgId) + 1;
				}else if(_this.imgId == 2){
					alert('已经是最后一张')
				}
			},
			showImgOne: function() {
				this.imgId = 0
			},
			showImgTwo: function() {
				this.imgId = 1
			},
			showImgThree: function() {
				this.imgId = 2
			}
		},
		data() {
			return {
				imgData: [
					{
						title: '1',
						href: '1',
						url: 'https://kikyives.github.io/learn/Vue/vue-component/src/assets/images/1.jpg'
					},
					{
						title: '2',
						href: '2',
						url: 'https://kikyives.github.io/learn/Vue/vue-component/src/assets/images/2.jpg'
					},
					{
						title: '3',
						href: '3',
						url: 'https://kikyives.github.io/learn/Vue/vue-component/src/assets/images/3.jpg'
					}
				],
				imgId: 0,
				haveArrow: false,
				isShow: true,
				isDefalut: false
			}
		} 
	}
</script>
<style>
	.shuffly{
		overflow: hidden;
		width:650px;
		height:400px;
	}
	.shuffly-list{
		float: left;
	}
	.shuffly-list img{
		width:650px;
		height:400px;
	}
	.dot {
	    overflow: hidden;
	    zoom: 1;
	    position: absolute;
	    bottom: 0;
	    right: 305px;
	}

	.dot li {
	    width: 8px;
	    height: 8px;
	    margin-bottom: 8px;
	    border-radius: 8px;
	    text-indent: -999px;
	    background: rgba(0,0,0,.3);
	    float: left;
	    margin-left: 5px;
	}
	.dot li.on{
		background:#fff;
	}
	.prev,.next{
		display: block;
		width:30px;
		height:30px;
		position: absolute;
		top:190px;
		cursor: pointer;
	}
	.prev{
		left:20px;
		background:url(https://kikyives.github.io/learn/Vue/vue-component/src/assets/images/prev.png) no-repeat center;
	}
	.next{
		right:20px;
		background:url(https://kikyives.github.io/learn/Vue/vue-component/src/assets/images/next.png) no-repeat center;
	}
	.cur{
		cursor: default;
	}
</style>