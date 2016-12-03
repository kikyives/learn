<template>
    <div class="center-wrap"  v-if="flag">
        <div class="tab-title">{{title}}</div>
        <ul class="nav nav-tabs">
            <li v-bind:class="{active: tab.showFlag > 0}" v-for="(tab,index) in tabs"  ><a @click="getList(index)">{{tab.name}}</a></li>
        </ul>
        <div class="tabs-body">
            <slot></slot>
        </div> 
    </div>
</template>	
<script>
	export default{
        props: {
            flag:{
                type: Boolean,
                required: true
            },
            title:{
                type: String,
                default: ''
            },
            tabs:{
                type: Array,
                required: true 
            }
        },
        data() {
            return {
                // selected: 0
            }
        },
        methods:{
            getList(key){
                // this.selected = key
                this.tabs.forEach(function(item){
                    item.showFlag = -1;
                });
                this.tabs[key].showFlag = 1;
            }
        }
        
	}
</script>
<style>
    .tabs-body{
        min-height: 300px;
        border-left:1px solid #ddd;
        border-right:1px solid #ddd;
        border-bottom:1px solid #ddd;
        border-radius: 0 4px 4px 4px;
    }
    .tab-title{
        font-size:14px;
        padding-bottom:20px;
        /*color:brown*/
    }
</style>