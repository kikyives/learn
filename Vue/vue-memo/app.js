new Vue({
	el: '#events',
	//在data属性中定义和网页交互的数据
	data: {
		event: {},
		events:[]
	},
	//在应用加载的时候回执行ready属性中的函数
	ready: function(){
		this.fetchEvents();
	},
	//在应用中使用的方法会在methods属性中定义
	methods: {
		//定义一个方法来获取数据
		// fetchEvents: function(){
		// 	var events = [{
		// 		id: 1,
		// 		name: '开会',
		// 		description: '上午9点21层大众会议礼堂',
		// 		date: '2015-09-10'
		// 	},{
		// 		id: 2,
		// 		name: '购物',
		// 		description: '买个充电宝',
		// 		date: '2015-10-02'
		// 	},{
		// 		id: 3,
		// 		name: '学习',
		// 		description: '学习Vue官网上的教程',
		// 		date: '2016-03-11'
		// 	}];

		// 	//$set是Vue提供的一个向数组插入数据的方法，在执行它的时候还会刷新视图
		// 	this.$set('events', events);
		// },

		//向事项数组插入数据
		addEvent: function() {
			if(this.event.name){
				this.events.push(this.event);
				this.event = {name: '', description:'', date:''};
			}
		},
		//删除数据
		deleteEvent: function (index) {
			if(confirm("Are you sure want to delete this event?")){
				this.events.splice(index, 1);
				// console.log(index)
			}

		}
	}
});