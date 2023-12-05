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

    let cycleIntroEventStart;
    let cycleEventStart;
    let projectIntroEventStart;
    let teamIntroEventStart;

    $(window).scroll(function(){
        if(on){
            sctop = $(this).scrollTop(); // 스크롤 위치값(this는 window)

            cycleIntroEventStart = $("#cycleIntroZone").offset().top - ($("#cycleIntroZone").height()/2);
            cycleEventStart = $("#cycleZone").position().top - ($("#cycleZone").height()/2)
            projectIntroEventStart = $("#projectIntroZone").position().top - ($("#projectIntroZone").height()/2)
            teamIntroEventStart = $("#projectZone").position().top - ($("#projectZone").height()/2)

            if(cycleIntroEventStart <= sctop) cycleIntroEvent();
            if(cycleEventStart <= sctop) cycleZoneEvent();
            if (projectIntroEventStart <= sctop) cycleEvent();
            
            if (teamIntroEventStart <= sctop) teamIntroEvent();
        }
    });

});

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
        "opacity" : "1",
        "padding-top" : "0"
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
        "opacity" : "1",
        "padding-top" : "0"
    })
}
// **************업사이클 이벤트*************