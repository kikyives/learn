<template lang="html">
	<div class="header" :style="{backgroundColor: skinColor}">
		<div class="name">
			<span class="func"><i class="func-icon" @click="showAsideMenu(true)"></i></span>
			<p>云音乐</p>
			<span class="search"><i class="search-icon" @click="toSearch"></i></span>
		</div>
		<div class="tab">
			<div class="item" :class="{link: linkBorerIndex == 1}">
				<router-link to="/music-list">我的</router-link>
			</div>
			<div class="item" :class="{link: linkBorerIndex == 2}">
				<router-link to="/find">发现</router-link>
			</div>
			<div class="item" :class="{link: linkBorerIndex == 3}">
				<router-link to="/social">一个</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'header',

		data() {
			return {
				index: ''
			};
		},
		computed: {
			linkBorerIndex() {
				return this.$store.state.linkBorerIndex;
			},
			skinColor() {
				return this.$store.state.skinColor;
			}
		},
		methods: {
			toSearch() {
				this.$router.push('/find');
			},
			showAsideMenu(flag) {
				this.$store.commit('showAsideMenu', flag);
			}
		}
	}
</script>

<style lang="scss" scoped>
	 .header {
    background-color: #B72712;
    color: white;
    flex: 1;
    width: 100%;
    .name {
      display: flex;
      justify-content: space-between;
      text-align: center;
      padding-top: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, .2);
      span.func {
        flex: 1;
        position: relative;
        i {
          display: inline-block;
          position: absolute;
          width: 20px;
          height: 20px;
          left: 15px;
          bottom: 0;
          background: url(./func.svg) no-repeat;
          background-size: contain;
          cursor: pointer;
        }
      }
      p {
        flex: 1;
      }
      span.search {
        position: relative;
        flex: 1;
        i {
          display: inline-block;
          position: absolute;
          width: 20px;
          height: 20px;
          right: 15px;
          bottom: 0;
          background: url(./search.svg) no-repeat;
          background-size: contain;
          cursor: pointer;
        }
      }
    }
    .tab {
      display: flex;
      border-bottom: 1px solid #9E9E9E;
      a {
        display: inline-block;
        width: 50%;
      }
      a::after {
        background-color: rgba(255, 255, 255, .2);
        height: 1px;
        bottom: -2px;
      }
      .item {
        display: inline-block;
        flex: 1;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .link {
      font-weight: bold;
      color: #BDBDBD;
      border-bottom: 1px solid #E0F2F1;
    }
  }
</style>
