webpackJsonp([1],Array(46).concat([function(t,i,s){"use strict";var o=s(23),e=s(144),n=s(132),a=s.n(n),c=s(129),r=s.n(c),u=s(134),l=s.n(u);o.a.use(e.a),i.a=new e.a({linkActiveClass:"active",routes:[{path:"/",name:"/",redirect:"/music-list"},{path:"/music-list",name:"MusicList",component:a.a},{path:"/social",name:"Social",component:l.a},{path:"/find",name:"Find",component:r.a}]})},,,,function(t,i,s){s(121);var o=s(3)(s(69),s(142),null,null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=s(131),e=s.n(o),n=s(130),a=s.n(n),c=s(128),r=s.n(c),u=s(133),l=s.n(u),d=s(127),h=s.n(d);i.default={name:"app",components:{VHeader:e.a,VFooter:a.a,AsideMenu:r.a,Play:l.a,About:h.a},beforeCreate:function(){this.$store.dispatch("getData")},mounted:function(){var t=this;this.$store.commit("findDOM",{name:"audio",dom:this.$refs.audio}),this.$refs.audio.addEventListener("ended",function(){t.next()}),this.$refs.audio.addEventListener("error",function(){t.next()}),console.log("%c Powered by kikyives","background-image:-webkit-gradient( linear, left top,right top, color-stop(0, #00a419),color-stop(0.15, #f44336), color-stop(0.29, #ff4300),color-stop(0.3, #AA00FF),color-stop(0.4, #8BC34A), color-stop(0.45, #607D8B),color-stop(0.6, #4096EE), color-stop(0.75, #D50000),color-stop(0.9, #4096EE), color-stop(1, #FF1A00));color:transparent;-webkit-background-clip:text;font-size:13px;")},computed:{audio:function(){return this.$store.state.audio},isPlaying:function(){return this.$store.state.isPlaying},DOM:function(){return this.$store.state.DOM},isShowAsideMenu:function(){return this.$store.state.isShowAsideMenu},isShowSearch:function(){return this.$store.state.isShowSearch},isShowIndex:function(){return this.$store.state.isShowIndex},isShowAbout:function(){return this.$store.state.isShowAbout},musicData:function(){return this.$store.state.musicData}},data:function(){return{defaultSrc:"http://m2.music.126.net/K1SFXCvWf8BO9VEpSvx2ew==/7967061257205150.mp3"}},methods:{next:function(){this.audio.index=this.audio.index===this.musicData.length-1?0:++this.audio.index,this.$store.commit("toggleMusic",this.audio.index)}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"about",data:function(){return{isHover:!1}},computed:{isShowAbout:function(){return this.$store.state.isShowAbout}},methods:{showAbout:function(){this.$store.commit("showAbout",!1)}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"AsideMenu",computed:{skinColor:function(){return this.$store.state.skinColor}},data:function(){return{isSignIn:!1}},methods:{showAsideMenu:function(){this.$store.commit("showAsideMenu",!1)},showAbout:function(){this.$store.commit("showAbout",!0)}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=s(14),e=s.n(o);i.default={name:"find",beforeCreate:function(){this.$store.commit("showMiniMusic",!0)},created:function(){var t=this;this.axios.get("/api/hot").then(function(i){t.hotKeywords=i.data})},mounted:function(){this.$store.commit("changeLinkBorderIndex",2)},computed:{musicData:function(){return this.$store.state.musicData}},data:function(){return{keywords:"",hotKeywords:[],isShowHot:!0,musicList:[],playIndex:"",isLoading:!1,isShowHistory:!1,searchHistory:localStorage.searchHistory&&JSON.parse(localStorage.searchHistory)||[]}},watch:{musicData:{handler:function(t,i){localStorage.musics=e()(t)},deep:!0},searchHistory:{handler:function(t){localStorage.searchHistory=e()(t)},deep:!0}},methods:{toSearch:function(t){var i=this;t.trim()&&(this.isShowHistory=!1,this.isShowHot=!1,this.playIndex=null,this.isLoading=!0,this.$store.commit("showMiniMusic",!1),this.keywords=t,this.axios.get("/api//search/100/"+t).then(function(t){return t.data.data.song}).then(function(s){i.musicList=s.list,i.isLoading=!1,i.searchHistory.unshift(t)}))},playMusic:function(t,i,s,o){s="http://ws.stream.qqmusic.qq.com/"+s+".m4a?fromtag=46",this.$store.commit("playMusic",{name:i,src:s,imgSrc:o}),this.$store.commit("addMusic",{name:i,src:s,musicImgSrc:o}),this.$store.commit("showMiniMusic",!0),this.playIndex=t},inputFocus:function(){this.keywords.trim()||(this.isShowHot=!1,this.isShowHistory=!0,this.musicList=[])},strDecode:function(t){return t.replace(/&#(x)?([^&]{1,5});?/g,function(t,i,s){return String.fromCharCode(parseInt(s,i?16:10))})}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={mounted:function(){var t=this;this.nativeAudio=document.querySelector("audio"),this.nativeAudio.addEventListener("play",function(){t.totalTime=t.transformTime(t.nativeAudio.duration),t.now=t.nativeAudio.currentTime,setInterval(function(){t.now=t.nativeAudio.currentTime},1e3)})},computed:{isPlaying:function(){return this.$store.state.isPlaying},isShowAsideMenu:function(){return this.$store.state.isShowAsideMenu},isShowMiniMusic:function(){return this.$store.state.isShowMiniMusic},audio:function(){return this.$store.state.audio},DOM:function(){return this.$store.state.DOM},musicData:function(){return this.$store.state.musicData},skinColor:function(){return this.$store.state.skinColor}},data:function(){return{playIcon:"play-icon",pauseIcon:"pause-icon",now:0,nativeAudio:{},totalTime:"0:00",defaultImg:"https://avatars1.githubusercontent.com/u/14293334?v=3&u=e48ddec44bf947a70029db847345d2cbffd025bf&s=400"}},methods:{play:function(){this.$store.commit("play",!this.isPlaying),this.isPlaying?this.DOM.audio.play():this.DOM.audio.pause()},showPlay:function(){this.isShowAsideMenu||(this.$store.commit("showIndex",!1),this.$store.commit("showMiniMusic",!1))},changeTime:function(t){var i=this.$refs.progressBar,s=i.getBoundingClientRect().left,o=t.pageX;this.nativeAudio.currentTime=(o-s)/i.offsetWidth*this.nativeAudio.duration,this.now=this.nativeAudio.currentTime,this.nativeAudio.play(),this.$store.commit("play",!0)},touchMove:function(t){var i=this.$ref.progressBar,s=i.getBoundingClientRect().left,o=t.touches[0].pageX;this.$refs.now.style.width=100*((o-s)/i.offsetWidth).toFixed(3)+"%"},touchEnd:function(t){this.nativeAudio.currentTime=this.$refs.now.style.width.replace("%","")/100*this.nativeAudio.duration,this.now=this.nativeAudio.currentTime,this.nativeAudio.play(),this.$stroe.commit("play",!0)},transformTime:function(t){var i=void 0,s=void 0;return i=Math.floor(t/60),i=1==i.toString().length?"0"+i:i,s=Math.floor(t-60*i),s=1==s.toString().length?"0"+s:s,i+":"+s}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"header",data:function(){return{index:""}},computed:{linkBorerIndex:function(){return this.$store.state.linkBorerIndex},skinColor:function(){return this.$store.state.skinColor}},methods:{toSearch:function(){this.$router.push("/find")},showAsideMenu:function(t){this.$store.commit("showAsideMenu",t)}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=s(14),e=s.n(o);i.default={name:"MusicList",beforeCreate:function(){this.$store.commit("showMiniMusic",!0)},mounted:function(){this.$store.commit("changeLinkBorderIndex",1)},computed:{musicData:function(){return console.log(this.$store.state.musicData),this.$store.state.musicData},DOM:function(){return this.$store.state.DOM},isPlaying:function(){return this.$store.state.isPlaying}},watch:{musicData:{handler:function(t,i){localStorage.musics=e()(t)},deep:!0}},data:function(){return{defaultImg:"https://avatars1.githubusercontent.com/u/14293334?v=3&u=e48ddec44bf947a70029db847345d2cbffd025bf&s=400"}},methods:{toggleMusic:function(t){this.$store.audio.index===t?(this.DOM.audio.paused?this.DOM.audio.play():this.DOM.audion.pause(),this.$store.commit("play",!this.isPlaying)):(this.DOM.audio.play(),this.$store.commit("play",!0)),this.$store.commit("toggleMusic",t)},del:function(t){this.$store.commit("del",t)}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"play",mounted:function(){var t=this;this.nativeAudio=document.querySelector("audio"),this.nativeAudio.addEventListener("play",function(){t.totalTime=t.transformTime(t.nativeAudio.duration),t.now=t.nativeAudio.currentTime,setInterval(function(){t.now=t.nativeAudio.currentTime},1e3),t.now=t.nativeAudio.currentTime})},computed:{audio:function(){return this.$store.state.audio},musicData:function(){return this.$store.state.musicData},isPlaying:function(){return this.$store.state.isPlaying},DOM:function(){return this.$store.state.DOM},skinColor:function(){return this.$store.state.skinColor}},data:function(){return{defaultImg:"https://avatars1.githubusercontent.com/u/14293334?v=3&u=e48ddec44bf947a70029db847345d2cbffd025bf&s=400",playIcons:['url("./play.svg")','url("./page.svg")'],now:0,nativeAudio:{},totalTime:"0.00",isShowSkinColors:!1,isShowMusicList:!1}},watch:{skinColor:function(t){localStorage.skinColor=t}},methods:{back:function(){this.$store.commit("showIndex",!0),this.$store.commit("showMiniMusic",!0),this.isShowSkinColor=!1,this.isShowMusicList=!1},toggleMusic:function(t){var i=this;this.$store.commit("toggleMusic",t),this.$store.commit("play",!0),setTimeout(function(){i.isShowMusicList=!1},100)},prev:function(){this.audio.index=0===this.audio.index?this.musicData.length-1:--this.audio.index,this.$store.commit("toggleMusic",this.audio.index)},play:function(){this.$store.commit("play",!this.isPlaying),this.isPlaying?this.DOM.audio.play():this.DOM.audio.pause()},next:function(){this.audio.index=this.audio.index===this.musicData.length-1?0:--this.audio.index,this.$store.commit("toggleMusic",this.sudio.index)},showSkinColor:function(){this.isShowSkinColors=!this.isShowSkinColors},changeSkinColor:function(t){this.$store.commit("changeSkinColor",t),this.isShowSkinColors=!1},changeTime:function(t){var i=this.$refs.progressBar,s=i.getBoundingClientRect().left,o=t.pageX;this.nativeAudio.currentTime=(o-s)/i.offsetWidth*this.nativeAudio.duration,this.now=this.nativeAudio.currentTime,this.nativeAudio.play(),this.$store.commit("play",!0)},touchMove:function(t){var i=this.$refs.progressBar,s=i.getBoundingClientRect().left,o=t.touches[0].pageX;this.$refs.now.style.width=100*((o-s)/i.offsetWidth).toFixed(3)+"%"},touchEnd:function(t){this.nativeAudio.currentTime=this.$refs.now.style.width.replace("%","")/100*this.nativeAudio.duration,this.now=this.nativeAudio.currentTime,this.nativeAudio.play(),this.$store.commit("play",!0)},transformTime:function(t){var i=void 0,s=void 0;return i=Math.floor(t/60),i=1==i.toString().length?"0"+i:i,s=Math.floor(t-60*i),s=1==s.toString().length?"0"+s:s,i+":"+s}}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"Social",components:{},beforeCreate:function(){this.$store.commit("showMiniMusic",!1)},created:function(){},mounted:function(){this.$store.commit("changeLinkBorderIndex",3)},data:function(){return{date:"",volume:"",picInfo:"kikyives",forward:"",wordsInfo:"最欢喜的事莫过于我喜欢你刚巧你也喜欢我。很多人说爱情需要经济基础才能走得长久，而我想说的是如果我爱你，你就是最有价值的。我想一切会更好。",index:0,isLoading:!1,isShowMask:!0,isShowControl:!1}},methods:{}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=s(48),e=s.n(o),n=s(14),a=s.n(n),c=s(47),r=s.n(c),u=s(23),l=s(50),d=s.n(l),h=s(46),m=s(45),v=s.n(m),f=s(49),p=s.n(f),w=s(51);u.a.config.productionTip=!1,u.a.use(p.a,v.a),u.a.use(w.a);var g=new w.a.Store({state:{musicData:[],skinColor:localStorage.skinColor||"#B72712",isShowIndex:!0,isPlaying:!1,isAnimation:!1,isShowAsideMenu:!1,isShowMiniMusic:!1,isShowAbout:!1,linkBorderIndex:"",DOM:{},audio:{name:"",src:"",musicImgSrc:"",index:0}},mutations:{del:function(t,i){0!==t.musicData.length&&t.musicData.splice(i,1)},play:function(t,i){t.isPlaying=i},addMusic:function(t,i){var s=!0,o=!1,e=void 0;try{for(var n,c=r()(t.musicData);!(s=(n=c.next()).done);s=!0){var u=n.value;if(a()(u)===a()(i))return}}catch(t){o=!0,e=t}finally{try{!s&&c.return&&c.return()}finally{if(o)throw e}}t.musicData.unshift(i)},toggleMusic:function(t,i){t.audio.name=t.musicData[i].name,t.audio.src=t.musicData[i].src,t.audio.musicImgSrc=t.musicData[i].musicImgSrc,t.audio.index=i},playMusic:function(t,i){t.audio.name=i.name,t.audio.src=i.src,t.audio.musicImgSrc=i.imgSrc,t.isPlaying=!0},findDOM:function(t,i){t.DOM[i.name]=i.dom},showIndex:function(t,i){t.isShowIndex=i},showAsideMenu:function(t,i){t.isShowAsideMenu=i},showMiniMusic:function(t,i){t.isShowMiniMusic=i},showAbout:function(t,i){t.isShowAbout=i},changeLinkBorderIndex:function(t,i){t.linkBorderIndex=i},changeSkinColor:function(t,i){t.skinColor=i}},actions:{getData:function(t){var i=t.commit,s=t.state;return"[]"!==localStorage.musics&&localStorage.musics?void(s.musicData=JSON.parse(localStorage.musics)):new e.a(function(t,o){u.a.axios.get("/api/music-data").then(function(t){0===t.data.errno&&(s.musicData=t.data.musicData,localStorage.musics=a()(s.musicData))}).then(function(){i("toggleMusic",0)}),t()})}}});new u.a({el:"#app",router:h.a,store:g,template:"<App/>",components:{App:d.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},,,,function(t,i,s){t.exports=s.p+"static/img/picInfo.79f7e2a.jpg"},function(t,i,s){s(117);var o=s(3)(s(70),s(138),"data-v-48e014a4",null);t.exports=o.exports},function(t,i,s){s(116);var o=s(3)(s(71),s(137),"data-v-37492710",null);t.exports=o.exports},function(t,i,s){s(120);var o=s(3)(s(72),s(141),"data-v-aa8d8e30",null);t.exports=o.exports},function(t,i,s){s(119);var o=s(3)(s(73),s(140),null,null);t.exports=o.exports},function(t,i,s){s(118);var o=s(3)(s(74),s(139),"data-v-69ef7468",null);t.exports=o.exports},function(t,i,s){s(122);var o=s(3)(s(75),s(143),null,null);t.exports=o.exports},function(t,i,s){s(115);var o=s(3)(s(76),s(136),"data-v-25ccfdc8",null);t.exports=o.exports},function(t,i,s){s(114);var o=s(3)(s(77),s(135),"data-v-00b23868",null);t.exports=o.exports},function(t,i,s){t.exports={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("transition",{attrs:{name:"showRouter"}},[o("div",{staticClass:"social",on:{click:function(i){t.isShowControl=!0},touchend:function(i){t.isShowControl=!0}}},[o("div",{staticClass:"title"},[o("div",{staticClass:"date",domProps:{textContent:t._s(t.date)}}),t._v(" "),o("div",{staticClass:"title-desc",domProps:{textContent:t._s(t.volume)}})]),t._v(" "),o("div",{staticClass:"img"},[o("img",{attrs:{src:s(126),alt:"插画"}}),t._v(" "),o("div",{staticClass:"img-desc"},[t._v("插画 | "+t._s(t.picInfo))])]),t._v(" "),o("div",{staticClass:"content"},[o("p",{domProps:{textContent:t._s(t.forward)}}),t._v(" "),o("div",{staticClass:"content-desc",domProps:{textContent:t._s(t.wordsInfo)}})])])])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"play"},[s("div",{staticClass:"header",style:{backgroundColor:t.skinColor}},[s("div",{staticClass:"back"},[s("div",{staticClass:"icon-back"},[s("i",{on:{click:t.back}})])]),t._v(" "),s("div",{staticClass:"title",on:{click:function(i){t.isShowMusicList=!1}}},[s("div",{staticClass:"name"},[t._v(t._s(t.audio.name||t.musicData[0]&&t.musicData[0].name||"Powered by kikyivers"))])]),t._v(" "),s("div",{staticClass:"list"},[s("div",{staticClass:"icon-list"},[s("i",{on:{click:function(i){t.isShowMusicList=!t.isShowMusicList}}})])])]),t._v(" "),s("div",{staticClass:"content"},[s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMusicList,expression:"isShowMusicList"}],staticClass:"music-list"},[s("ul",t._l(t.musicData,function(i,o){return s("li",{class:{activeColor:o===t.audio.index},on:{click:function(i){t.toggleMusic(o)}}},[t._v(t._s(o+1+".  "+i.name))])}))])]),t._v(" "),s("img",{attrs:{src:t.audio.musicImgSrc||t.musicData[0]&&t.musicData[0].musicImgSrc||t.defaultImg},on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.isShowSkinColors=!1,t.isShowMusicList=!1}}}),t._v(" "),s("div",{staticClass:"img",on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.isShowSkinColors=!1,t.isShowMusicList=!1}}},[s("img",{attrs:{src:t.audio.musicImgSrc||t.musicData[0]&&t.musicData[0].musicImgSrc||t.defaultImg}})]),t._v(" "),s("div",{staticClass:"progress"},[s("div",{staticClass:"start-time"},[t._v(t._s(t.transformTime(t.now)))]),t._v(" "),s("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:function(i){t.changeTime(i)},touchmove:function(i){t.touchMove(i)},touchend:function(i){t.touchEnd(i)}}},[s("div",{ref:"now",staticClass:"now",style:{width:100*(t.now/t.nativeAudio.duration).toFixed(3)+"%"}})]),t._v(" "),s("div",{staticClass:"end-time",domProps:{textContent:t._s(t.totalTime)}})]),t._v(" "),s("div",{staticClass:"skin"},[s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSkinColors,expression:"isShowSkinColors"}],staticClass:"skin-colors"},[s("i",{staticClass:"one",class:{selected:"#B72712"===t.skinColor},on:{click:function(i){t.changeSkinColor("#B72712")}}}),t._v(" "),s("i",{staticClass:"two",class:{selected:"#1565C0"===t.skinColor},on:{click:function(i){t.changeSkinColor("#1565C0")}}}),t._v(" "),s("i",{staticClass:"three",class:{selected:"#212121"===t.skinColor},on:{click:function(i){t.changeSkinColor("#212121")}}}),t._v(" "),s("i",{staticClass:"four",class:{selected:"#1B5E20"===t.skinColor},on:{click:function(i){t.changeSkinColor("#1B5E20")}}})])]),t._v(" "),s("div",{staticClass:"icon-skin",class:{"icon-skin-red":"#B72712"===t.skinColor,"icon-skin-blue":"#1565C0"===t.skinColor,"icon-skin-black":"#212121"===t.skinColor,"icon-skin-green":"#1B5E20"===t.skinColor},on:{click:t.showSkinColor}})],1)],1),t._v(" "),s("div",{staticClass:"footer",style:{backgroundColor:t.skinColor}},[s("div",{staticClass:"prev"},[s("div",{staticClass:"icon-prev"},[s("i",{on:{click:t.prev}})])]),t._v(" "),s("div",{staticClass:"play"},[s("div",{staticClass:"icon-play"},[s("i",{class:[t.isPlaying?"pause-icon":"play-icon"],on:{click:t.play}})])]),t._v(" "),s("div",{staticClass:"next"},[s("div",{staticClass:"icon-next"},[s("i",{on:{click:t.next}})])])])])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"fadeIn"}},[s("div",{staticClass:"aside-menu"},[s("i",{staticClass:"back",on:{click:t.showAsideMenu}}),t._v(" "),s("div",{staticClass:"aside"},[s("div",{staticClass:"info",style:{backgroundColor:t.skinColor}},[s("a",{staticClass:"avatar",attrs:{href:"https://microzz.com/",target:"_blank"}},[s("img",{attrs:{src:"https://avatars1.githubusercontent.com/u/14293334?v=3&u=e48ddec44bf947a70029db847345d2cbffd025bf&s=400"}})]),t._v(" "),s("div",{staticClass:"about"},[s("span",{staticClass:"name"},[s("a",{attrs:{href:"https://microzz.com/"}},[t._v("kikyives")])]),t._v(" "),s("span",{staticClass:"level"},[t._v("Lv24")]),t._v(" "),s("span",{staticClass:"sign",on:{click:function(i){t.isSignIn=!0}}},[s("i"),t._v("\n            "+t._s(t.isSignIn?"已签到":"签到")+"\n          ")])])]),t._v(" "),s("div",{staticClass:"settings"},[s("div",{staticClass:"content"},[s("ul",[s("li",[s("i",{staticClass:"icon-msg"}),t._v("我的消息")]),t._v(" "),s("li",[s("i",{staticClass:"icon-vip"}),t._v("会员中心")]),t._v(" "),s("li",[s("i",{staticClass:"icon-shop"}),t._v("商城")]),t._v(" "),s("li",[s("i",{staticClass:"icon-music"}),t._v("在线听歌免流量")])]),t._v(" "),s("ul",[s("li",[s("i",{staticClass:"icon-friend"}),t._v("我的好友")]),t._v(" "),s("li",[s("i",{staticClass:"icon-near"}),t._v("附近的人")])]),t._v(" "),s("ul",[s("li",{on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.$store.commit("showIndex",!1)}}},[s("i",{staticClass:"icon-skin"}),t._v("个性换肤")]),t._v(" "),s("li",{on:{click:t.showAbout}},[s("i",{staticClass:"aboutme"}),t._v("关于")])]),t._v(" "),s("div",{staticClass:"back"},[s("i",{staticClass:"icon-back",on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.showAsideMenu(i)}}})])])])]),t._v(" "),s("div",{staticClass:"mask",on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.showAsideMenu(i)}}})])])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"showAbout"}},[s("div",{staticClass:"about"},[s("i",{staticClass:"close",on:{click:t.showAbout}}),t._v(" "),s("div",{staticClass:"about-content"},[s("h1",[t._v("关于")]),t._v(" "),s("p",{staticClass:"skill"},[s("b",[t._v("技术栈")]),t._v("：")]),t._v(" "),s("div",[t._v("Vue2"),s("br"),t._v("Vuex"),s("br"),t._v("vue-router"),s("br"),t._v("axios"),s("br"),t._v("SASS(SCSS)"),s("br"),t._v("Express(上线版本是Koa2)"),s("br"),t._v("Webpack"),s("br"),t._v("ES6"),s("br"),t._v("localStorage(HTML5)"),s("br"),t._v("CSS3")])]),t._v(" "),s("div",{staticClass:"mask",on:{click:t.showAbout}})])])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"header",style:{backgroundColor:t.skinColor}},[s("div",{staticClass:"name"},[s("span",{staticClass:"func"},[s("i",{staticClass:"func-icon",on:{click:function(i){t.showAsideMenu(!0)}}})]),t._v(" "),s("p",[t._v("云音乐")]),t._v(" "),s("span",{staticClass:"search"},[s("i",{staticClass:"search-icon",on:{click:t.toSearch}})])]),t._v(" "),s("div",{staticClass:"tab"},[s("div",{staticClass:"item",class:{link:1==t.linkBorerIndex}},[s("router-link",{attrs:{to:"/music-list"}},[t._v("我的")])],1),t._v(" "),s("div",{staticClass:"item",class:{link:2==t.linkBorerIndex}},[s("router-link",{attrs:{to:"/find"}},[t._v("发现")])],1),t._v(" "),s("div",{staticClass:"item",class:{link:3==t.linkBorerIndex}},[s("router-link",{attrs:{to:"/social"}},[t._v("一个")])],1)])])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMiniMusic,expression:"isShowMiniMusic"}],staticClass:"footer",style:{backgroundColor:t.skinColor}},[s("div",{staticClass:"mini-music"},[s("div",{staticClass:"music-img"},[s("img",{ref:"img",attrs:{src:t.audio.musicImgSrc||t.musicData[0]&&t.musicData[0].musicImgSrc||t.defaultImg},on:{click:t.showPlay}})]),t._v(" "),s("div",{staticClass:"music-name"},[s("p",{on:{Click:t.showPlay}},[t._v(t._s(t.audio.name||t.musicData[0]&&t.musicData[0].name||"Powered by kikyivers"))]),t._v(" "),s("div",{staticClass:"progress"},[s("span",{staticClass:"start"},[t._v(t._s(t.transformTime(t.now)))]),t._v(" "),s("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:function(i){t.changeTime(i)},touchmove:function(i){t.touchMove(i)},touchend:function(i){t.touchEnd(i)}}},[s("div",{ref:"now",staticClass:"now",style:{width:100*(t.now/t.nativeAudio.duration).toFixed(3)+"%"}})]),t._v(" "),s("span",{staticClass:"end",domProps:{textContent:t._s(t.totalTime)}})])]),t._v(" "),s("div",{staticClass:"music-control"},[s("i",{class:[t.isPlaying?t.pauseIcon:t.playIcon],on:{click:function(i){t.play()}}})])])])])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"showRouter"}},[s("div",{staticClass:"find"},[s("div",{staticClass:"search-input"},[s("div",{staticClass:"input"},[s("i",{staticClass:"icon-search"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],class:{"input-focus":!t.isShowHot},attrs:{type:"text",placeholder:"搜索歌曲"},domProps:{value:t.keywords},on:{keyup:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13))return null;t.toSearch(t.keywords)},focus:t.inputFocus,input:function(i){i.target.composing||(t.keywords=i.target.value)}}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:""!==t.keywords&&!t.isShowHot,expression:"keywords!==''&&!isShowHot"}],staticClass:"icon-cancel",on:{click:function(i){t.keywords=""}}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowHot,expression:"!isShowHot"}],staticClass:"cancel-btn",on:{click:function(i){t.isShowHot=!0}}},[t._v("取消")])])]),t._v(" "),t.isShowHot?s("div",{staticClass:"hot"},[t._v("\n      热门搜索\n      "),s("div",{staticClass:"keywords"},t._l(t.hotKeywords,function(i){return s("div",{staticClass:"keyword",domProps:{textContent:t._s(i)},on:{click:function(s){t.toSearch(i)}}})}))]):s("div",{staticClass:"search-list",on:{touchmove:function(i){t.$store.commit("showMiniMusic",!1)}}},[t._l(t.searchHistory,function(i,o){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowHistory,expression:"isShowHistory"}],staticClass:"history"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"icon-history"})]),t._v(" "),s("div",{staticClass:"word",on:{click:function(s){t.toSearch(i)}}},[t._v(t._s(i))]),t._v(" "),s("div",{staticClass:"icon"},[s("i",{staticClass:"icon-del",on:{click:function(i){t.searchHistory.splice(o,1)}}})])])}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowHistory&&t.searchHistory.length,expression:"isShowHistory&&searchHistory.length"}],staticClass:"tips",on:{click:function(i){t.searchHistory=[]}}},[t._v("清除搜索记录")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading"},[s("i",{staticClass:"icon-loading"}),t._v("搜索中...")]),t._v(" "),t._l(t.musicList,function(i,o){return s("div",{staticClass:"music",on:{click:function(s){t.playMusic(o,(i.f.split("|")[3]&&t.strDecode(i.f.split("|")[3].replace(/amp\;/g,"")).replace(/\;/g,"/")||"佚名")+" - "+t.strDecode(i.fsong),i.f.split("|")[0],i.f.split("|")[4]&&"http://imgcache.qq.com/music/photo/album_300/"+i.f.split("|")[4]%100+"/300_albumpic_"+i.f.split("|")[4]+"_0.jpg")}}},[s("div",{staticClass:"icon-music"},[s("img",{attrs:{src:i.f.split("|")[4]&&"http://imgcache.qq.com/music/photo/album_300/"+i.f.split("|")[4]%100+"/300_albumpic_"+i.f.split("|")[4]+"_0.jpg",alt:"microzz.com"}})]),t._v(" "),s("div",{staticClass:"music-info"},[s("div",{staticClass:"music-name"},[t._v(t._s(t.strDecode(i.fsong)))]),t._v(" "),s("div",{staticClass:"music-singer"},[t._v(t._s(i.f.split("|")[3]&&t.strDecode(i.f.split("|")[3].replace(/amp\;/g,"")).replace(/\;/g,"/")||"佚名"))]),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:o===t.playIndex,expression:"index === playIndex"}],staticClass:"icon-listening"})])])}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.musicList.length,expression:"musicList.length"}],staticClass:"tips"},[t._v("没有更多结果了～")])],2)])])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"show"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowIndex,expression:"isShowIndex"}],staticClass:"index"},[s("AsideMenu",{directives:[{name:"show",rawName:"v-show",value:t.isShowAsideMenu,expression:"isShowAsideMenu"}]}),t._v(" "),s("VHeader"),t._v(" "),s("router-view"),t._v(" "),s("VFooter")],1)]),t._v(" "),s("transition",{attrs:{name:"showIndex"}},[s("Play",{directives:[{name:"show",rawName:"v-show",value:!t.isShowIndex,expression:"!isShowIndex"}]})],1),t._v(" "),s("audio",{ref:"audio",attrs:{src:t.audio.src||t.musicData[0]&&t.musicData[0].src||t.defaultSrc,autoplay:t.isPlaying}}),t._v(" "),t.isShowAbout?s("About"):t._e()],1)},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"showRouter"}},[s("div",{staticClass:"music-list"},[t._l(t.musicData,function(i,o){return s("div",{staticClass:"music-item"},[s("img",{staticClass:"music-img",attrs:{src:i.musicImgSrc||t.defaultImg}}),t._v(" "),s("span",{staticClass:"music-name",on:{click:function(i){t.toggleMusic(o)}}},[t._v(t._s(o+1+" "+i.name))]),t._v(" "),s("span",{staticClass:"del-icon",on:{click:function(i){t.del(o)}}})])}),t._v(" "),s("div",{staticClass:"tips"},[t._v("没有更多歌曲了~")])],2)])},staticRenderFns:[]}}]),[78]);
//# sourceMappingURL=app.32bc8a74edc3c321ea4d.js.map