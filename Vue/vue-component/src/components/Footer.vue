<template>
	<footer class="footer">
		<a href="https://kikyives.github.io" target="_bank">博客</a>
		<p>Copyright © <span>kiky</span> 2016 </p>
	</footer>
</template>
<style>
	.footer{
		overflow: hidden;
		height:80px;	
		line-height:80px;
		position: fixed;
	    bottom: 0; 
	    right: 0;
	    left: 230px;
	    border-top: solid 1px rgba(16, 16, 16, 0.1);
	    background-color: rgba(238, 238, 238, 0.6);
	    box-shadow: 0 0 10px #eee;
	    color: #777;
	    font-family: "Microsoft Yahei", sans-serif;
	}
	.footer a{
		float: left;
		margin-left:20px;
		font-size:16px;
		color:#777;
		text-decoration: none;
	}
	.footer p{
		margin-top:0;
		margin-left:50px;
		float: left;
		font-size:14px;
	}
	.footer p span{
		color:#00cc66;
	}
</style>