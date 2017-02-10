(function($){
    var swipe = (function(){
        var iSwipe =  0,//当前页数
            clientWidth = $(window).width(),//当前浏览器宽度
            clientHeight =  $(window).height(),//当前浏览器高度
            _this =  $('#page_box'),//当前触发页面id
            _page = $('.page');//page类
        var getMarginTop = function(){
            var sMarginTop= -iSwipe * clientHeight + 'px';
            _this[0].style.WebkitTransition='all .6s ease-in';
            _this.css('marginTop',sMarginTop);
        }

        _this.height(7*clientHeight);
        _page.height(clientHeight);
        //浏览器窗口发生变化
        $(window).resize(function(){
            clientWidth = $(window).width(); 
            clientHeight = $(window).height();
            _this.height(7*clientHeight);
            _page.height(clientHeight);
            sMarginTop=-iSwipe*clientHeight+'px';
            _this.css('marginTop',sMarginTop);
        });
     
         _this.swipeUp(function(){
            if(iSwipe != 6){
                if(iSwipe == 0){
                    //上一页移除动画
                    $('.page1').removeClass('active');                
                    //下一页添加动画
                    $('.page2').addClass('active');
                }else if(iSwipe == 1){
                    $('.page2').removeClass('active');
                    $('.page3').addClass('active');
                }else if(iSwipe == 2){
                    $('.page3').removeClass('active');
                    $('.page4').addClass('active');
                }else if(iSwipe == 3){
                    $('.page4').removeClass('active');
                    $('.page5').addClass('active');
                }else if(iSwipe == 4){
                    $('.page5').removeClass('active');
                    $('.page6').addClass('active');
                }else if(iSwipe == 5){
                    $('.page6').removeClass('active');
                    $('.page7').addClass('active');
                }
                iSwipe++
            }
             getMarginTop()
        });
        _this.swipeDown(function(){
            if(iSwipe!=0){
                if(iSwipe == 1){
                    //添加动画
                    $('.page1').addClass('active');
                    //移除动画
                    $('.page2').removeClass('active');
                }else if(iSwipe == 2){
                    $('.page2').addClass('active');
                    $('.page3').removeClass('active');
                }else if(iSwipe == 3){
                    $('.page3').addClass('active');
                    $('.page4').removeClass('active');
                }else if(iSwipe == 4){
                    $('.page4').addClass('active');
                    $('.page5').removeClass('active');
                }else if(iSwipe == 5){
                    $('.page5').addClass('active');
                    $('.page6').removeClass('active');
                }else if(iSwipe == 6){
                    $('.page6').addClass('active');
                    $('.page6').removeClass('active');
                }
                iSwipe--
            }
            getMarginTop();
        });
         document.addEventListener('touchstart',function(e){
            e.preventDefault();
          /*  e.stopPropagation();*/
        },false);
    })();
    //page4领导对个人评语
    $.fn.textLoad = function(options){
        $(this).html(
            creatList(options.data,options.number)
        );

            function creatList(data,number) {
                var str = '',
                    html = {
                        pic: '<div class="clerk_pic left mar_r"><img src="{{pic}}"></div>',
                        name: '<div class="clerk_name">{{name}}</div>',
                        com: '<div class="leader_com com_height">{{com}}',
                        btn:'<a href="javascript:void(0);" data-id="{{id}}">更多评语</a>',
                        listBoxBefore: '<div class="clerk"><div class="clerk_info">',
                        listBoxCenter: '</div>',
                        listAfter: '</div></div>',
                    }
                $.each(data, function(i, item) {
                    str += html['listBoxBefore']
                    str += html['pic'].replace(/{{pic}}/, data[i].pic)
                    str += html['name'].replace(/{{name}}/, data[i].name)
                    str += html['listBoxCenter']
                    str += html['com'].replace(/{{com}}/, data[i].com.substring(0,number) + '......')
                    str += html['btn'].replace(/{{id}}/, data[i].id)
                    str += html['listAfter']
                })
                return str;
            }
           
        //请求数据
        // var  ajaxRequest=function(data,url,param){         
        //    $.ajax({
        //        url: url,
        //        data:param,
        //        dataType: 'json',
        //        type: 'post',
        //        success: function (data) {
        //             //console.log(data);
        //            if (data) {
        //                 
        //            };
        //        },
        //        error: function (e) {
        //           // console.log(e);
        //        }
        //    });       
        // };
        $('.clerk a').on('tap',function(){
            var id = $(this).attr('data-id');
            //console.log(id)
            openModel(options.data,id)
        })
        var openModel = function(data,id){
           
            var alert =(function(data,id){
                 var mod = '',
                    mHtml = {
                        mPic: '<div class="clerk_pic mar"><img src="{{pic}}"></div>',
                        mName: '<div class="clerk_name text_center line_high">{{name}}</div>',
                        mCom: '<div class="leader_com mar1">{{com}}</div>',
                        mCloes: '<div class="close"></div>',
                        modelBoxBefore: '<div class="alert"><div class="page_wrap"><div class="com_content"><div class="clerk_info">',
                        modelBoxCenter:'</div>',
                        modelBoxAfter:'</div></div></div>'
                    }
                
                    mod += mHtml['modelBoxBefore']
                    mod += mHtml['mPic'].replace(/{{pic}}/, data[id].pic)
                    mod += mHtml['mName'].replace(/{{name}}/, data[id].name)
                    mod += mHtml['modelBoxCenter']
                    mod += mHtml['mCom'].replace(/{{com}}/, data[id].com)
                    mod += mHtml['mCloes']
                    mod += mHtml['modelBoxAfter']
                //console.log(mod)
                return mod; 

            })(data,id) 

             $('body').append(alert);
             $('.close').on('tap', function(){

                $('.alert').remove();
             })
        }
    
    }

    
})(Zepto)