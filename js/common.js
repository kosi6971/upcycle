/* common.html js */
$(()=>{
    console.log("common.js");

    let on=0;
    const chair = $("#chair");

    chair.stop().click(()=>{
        setTimeout(function () {
            on++;
        }, 1000)
    });

    // 스크롤 이벤트 기본 변수
    const winH = $(window).height(); // 보이는 화면 길이
    const fullpage = $(document).height()-winH; // 페이지 전체 길이
    let sctop; // 스크롤 위치 이동값
    
    let headLine
    const headBody = $(".headBody")

    $(window).scroll(function(){
        if(on){
            sctop = $(this).scrollTop(); // 스크롤 위치값(this는 window)
            headLine = $("#headLine").position().top

            if(headLine > sctop){
                headBody.css({
                    "top" : `-${sctop}px`,
                    "background-color": "rgba(211, 208, 200, 0)"
                });

                $(".headMenuBtn div").css("color", "black")

                $("#headLine>li").addClass("headMenuBtn");
                $("#headLine>li").removeClass("headMenuBtn2");
            }
            else if(headLine <= sctop){
                headBody.css({
                    
                    "top" : `-130px`,
                    "background-color": "#6D7A71"
                });
                
                $(".headMenuBtn div").css("color", "white")

                $("#headLine>li").addClass("headMenuBtn2");
                $("#headLine>li").removeClass("headMenuBtn");
            } 
            
            




        }
    });

    // **************스크롤 제어************
    const HeadScrollBtn = $(".subMenu1>li")
    let teamEventStart
    let projectEventStart

    HeadScrollBtn.on("click", function () {
        const clickBtn = $(this).index()
        cycleIntroEventStart = $("#cycleIntroZone").offset();
        projectEventStart = $("#projectIntroZone").offset();
        teamEventStart = $("#projectZone").offset();
        
        switch (clickBtn) {
            case 0:
                $("html, body").animate({scrollTop :  cycleIntroEventStart.top-100}, 1000)
                break;
            
            case 1:
                $("html, body").animate({scrollTop :  projectEventStart.top}, 1000)
                break;

            case 2:
                $("html, body").animate({scrollTop :  teamEventStart.top-150}, 1000)
                break;
        
            default:
                break;
        }
    })
    // **************스크롤 제어************

    
});