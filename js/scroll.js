/* scoll js */

$(()=>{
    console.log("scoll.js");

    // 스크롤 이벤트 기본 변수
    const winH = $(window).height(); // 보이는 화면 길이
    const fullpage = $(document).height()-winH; // 페이지 전체 길이
    let sctop; // 스크롤 위치 이동값

    let on=0;
    const chair = $("#chair");

    chair.stop().click(()=>{
        setTimeout(function () {
            on++;
        }, 1000)
    });

    $(window).scroll(function(){
        if(on){
            sctop = $(this).scrollTop(); // 스크롤 위치값(this는 window)

            if(sctop >= 1000) $(".subMenu li").css("background-color", "white");
            else $(".subMenu li").css("background-color", "rgb(0 0 0 / 0%)");

            let cycleIntroEventStart = posEvent($("#cycleIntroZone"));
            let cycleEventStart = posEvent($("#cycleZone"));
            let projectIntroEventStart = posEvent($("#projectIntroZone"));
            let teamIntroEventStart = posEvent($("#projectZone"));


            if(cycleIntroEventStart <= sctop) cycleIntroEvent();
            if(cycleEventStart <= sctop) cycleZoneEvent();
            if (projectIntroEventStart <= sctop) cycleEvent();
            
            if (teamIntroEventStart <= sctop) teamIntroEvent();
        }
    });

});

function posEvent(e) {
   let pos = e.position().top - (e.height()/2)
   return pos;
}

// **************로고 옆 텍스트 이벤트*************
function teamIntroEvent(){
    const projectTextInZone = $(".projectTextInZone")

    projectTextInZone.css("left", "0")
}
// **************로고 옆 텍스트 이벤트*************

// **************사이클 이벤트*************
function cycleZoneEvent(){
    const cycleZone = $("#cycleZone")

    cycleZone.css({
        "opacity" : "1"
    })
}
// **************사이클 이벤트*************

// **************사이클 인트로 텍스트 이벤트*************
function cycleIntroEvent(){
    const cycleText = $(".cycleIntroTextZone")

    cycleText.css("opacity", "1")
}
// **************사이클 인트로 텍스트 이벤트*************

// **************업사이클 이벤트*************
function cycleEvent(){
    const projectIntro = $("#projectIntroZone")

    projectIntro.css({
        "opacity" : "1"
    })
}
// **************업사이클 이벤트*************