AOS.init();

$(function(){
    $('.more-detail-btn').tooltip();

    $('#portfolio-filters>li').click(function(){
        let filter = $(this).data('filter');
        $('#portfolio-filters>li').removeClass('active');
        $(this).addClass('active');
        if(filter == '*'){
            $('.portfolio-item').fadeIn();
        } else {
            $('.portfolio-item').hide();
            $('.'+filter).fadeIn();
        }
    })

    /* 카카오지도 */
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.6446455, 126.6670966), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.6446455, 126.6670966); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    let mobile = false; 

    $('.mobile-nav-toggle').click(function(){
        mobile = true; 
        $('.mobile-nav-toggle').css({'display':'none'});
        $('.ri-close-fill').css({'display':'block'});
        $('.navbar ul').animate({
            right : '-15px',
            opacity : 1
        },500);
    });
    $('.ri-close-fill').click(function(){
        $('.mobile-nav-toggle').css({'display':'block'});
        $('.ri-close-fill').css({'display':'none'});
        $('.navbar ul').animate({
            right : '-215px',
            opacity : 0
        },500)
    });

    $('.nav-link').click(function(e){
        e.preventDefault();
        let direct = $(this).attr('href');
        let postTop 
        if(direct == '#'){
            $('html,body').animate({
                scrollTop : 0
            }, 500);
        } else {
            postTop = $(direct).offset().top;
        
            $('html,body').animate({
                scrollTop : postTop
            },500);
            if (mobile) {
                $('.mobile-nav-toggle').css({'display':'block'});
                $('.ri-close-fill').css({'display':'none'});
                $('.navbar ul').animate({
                    right : '-215px',
                    opacity : 0
                },500), function(){
                    mobile = false
                };
            }
        }
    })

    $('.btn-get-started').click(function(e){
        e.preventDefault();
        let direct = $(this).attr('href');
        let postTop = $(direct).offset().top;
        $('html,body').animate({
            scrollTop : postTop
        }, 500); 
    });

    
    $('.remotecontrol, .logo').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop : 0
        }, 500);
    })

    // $('.mobile-nav-toggle').click(function(){
    //     $('.mobile-nav-toggle').css({'display':'none'});
    //     $('.ri-close-fill').css({'display':'block'});
    //     $('.navbar ul').animate({
    //         right : '-15px'
    //     },1000);
    // });
    // $('.ri-close-fill').click(function(){
    //     $('.mobile-nav-toggle').css({'display':'block'});
    //     $('.ri-close-fill').css({'display':'none'});
    //     $('.navbar ul').animate({
    //         right : '-215px'
    //     },1000)
    // });
})

