/* intro.html js */
$(()=>{
    console.log("intro.js");
    
    // start id
    const start = $("#start");
    // 의자 id
    const chair = $("#chair");
    // 라인 버튼 class
    const mainBtn = $(".mainLineBtn");
    // 화면 class
    const screen = $(".mainMenu");

    // **************인트로 부분**************
    // 의자 클릭
    chair.stop().click(()=>{
        // 의자 out
        chair.css({
            "transition": "3.4s",
            "margin-top":"-500%"
        });

        chair.find("div>div").stop().css({
            "filter": "grayscale(0%)"
        });
        

        //main up
        start.stop().css({
            "margin-top":"0%",
            "opacity":"1"
        });

    });
    // **************인트로 부분**************

    // **************자기 소개 부분**************
    // 라인 버튼 마우스 오버
    mainBtn.stop().hover(function(){
        let index = mainBtn.index(this);
        let btnText = mainBtn.eq(index).children(".mainLineBtnText");
        let btn =  mainBtn.eq(index);

        btnText.stop().css({
            "color":"red"
        });
        
        btn.stop().css({
            "border-top" : "1px solid red",
            "border-bottom" : "1px solid red"
        });
    }, 
    function(){
        let index = mainBtn.index(this);
        let btnText = mainBtn.eq(index).children(".mainLineBtnText");
        let checkBoxVal = $(".mainBtnCheckBox").eq(index).is(":checked");
        let btn =  mainBtn.eq(index);

        if(checkBoxVal == false){
            btnText.stop().css({
                "color":"black"
            });
    
            btn.stop().css({
                "border-top" : "1px solid black",
                "border-bottom" : "1px solid black"
            });
        }
        
    });

    // 라인 버튼 클릭
    mainBtn.stop().click(function(){
        // 버튼 순서
        let index = mainBtn.index(this);
        // 클릭된 버튼
        let btn =  mainBtn.eq(index);
        // 버튼text
        let btnText = btn.children(".mainLineBtnText");
        // 올라올 화면
        let clickScreen = screen.eq(index);
        // 체크박스
        let checkBox = $(".mainBtnCheckBox").eq(index);

        // 선택한 체크박스만 체크
        checkBox.prop("checked", true).siblings().prop("checked",false);


        // ****버튼text 색 전환****
        $(".mainLineBtnText").stop().css({
            "color":"black"
        });

        $(".mainLineBtn").stop().css({
            "border-top" : "1px solid black",
            "border-bottom" : "1px solid black"
        });

        btnText.stop().css({
            "color" : "red"
        });

        btn.stop().css({
            "border-top" : "1px solid red",
            "border-bottom" : "1px solid red"
        });
        // ****버튼text 색 전환****

        // ****화면 전환****
        // 화면 down
        screen.stop().css({
            "top" : "100%",
            "opacity": "0"
        });
        // 화면 up
        clickScreen.stop().css({
            "top" : "0%",
            "opacity": "1"
        });
        // ****화면 전환****

    });
    // **************자기 소개 부분**************


    // **************서브 배너 부분**************
    let upText = $(".mainText1");
    let downText = $(".mainText2");
    let upImg = $(".mainImg1");
    let downImg = $(".mainImg2");
    let tmp;

    setInterval(function() { 
        upText.stop().css({
            "top" : "100%"
        });

        downText.stop().css({
            "top" : "0"
        });

        upImg.stop().css({
            "top" : "-100%"
        });

        downImg.stop().css({
            "top" : "0"
        });

        setTimeout(function(){
            downText.stop().css({
                "top" : "-100%",
                "display" : "none"
            });
    
            downImg.stop().css({
                "top" : "100%",
                "display" : "none"
            });

            setTimeout(function(){
                downText.stop().css({
                    "display" : "block"
                });
        
                downImg.stop().css({
                    "display" : "block"
                });
            }, 500);
        }, 500);

        tmp = upText
        upText = downText;
        downText = tmp;

        tmp = upImg
        upImg = downImg;
        downImg = tmp;
    }, 3000);



    let languageBtn = $(".languageBtn")

    languageBtn.stop().click(function(){
        let index = languageBtn.index(this);
        let btnText = languageBtn.eq(index).children(".languageBtnText");

        $(".languageBtnText").stop().css({
            "color" : "black"
        });

        btnText.stop().css({
            "color" : "red",
            "transition": ".5s"
        });


    });
    // **************서브 배너 부분**************

    // **************배너 부분*************
    // 사진 경로
    const bannerImg = [
        "../img/banner_test-1.jpg",
        "../img/banner_test-2.jpg",
        "../img/banner_test-3.jpg"
    ];
    // 이미지 개수
    const bannerBtn = $(".bannerBtnZone>button");
    const imgCnt = 3;
    let cntI=0;
    let stopCnt = 0;

    setInterval(()=>{
        if(stopCnt)return;
        stopCnt = 1;
        setTimeout(()=>{
            stopCnt = 0; // 해제
        }, 1500);

        bannerSet(1);
    }, 2000);

    bannerBtn.click(function(){
        if(stopCnt)return;
        stopCnt = 1;
        setTimeout(()=>{
            stopCnt = 0; // 해제
        }, 1500);

        bannerSet(Number(this.value));
    });

    function bannerSet(val) {
        if(val==1){
            cntI++;
            if (cntI >= imgCnt) cntI = 0;
            $(".bannerLine").append(`<img class="bannerImg" src="${bannerImg[cntI]}">`);
            $(".bannerLine>img:first-child").remove();
        }
        else if(val==-1){
            cntI--;
            if (cntI < 0) cntI = imgCnt - 1;
            $(".bannerLine").prepend(`<img class="bannerImg" src="${bannerImg[cntI]}">`);
            $(".bannerLine>img:last-child").remove();
        }
        
    }
    // **************배너 부분*************

    const cycleIntroBtn = $(".cycleIntroBtn>button")
    cycleIntroBtn.on("click", function () {
        const cycleZone = $("#cycleZone").offset();
        $("html, body").animate({scrollTop :  cycleZone.top-100}, 1000)
    })

    const projectIntroBtn = $("#projectIntroZone>button");
    projectIntroBtn.on("click", function () {
        const projectMain = $("#projectMainZone").offset();
        $("html, body").animate({scrollTop :  projectMain.top-100}, 1000)
    })

    const projectBtn = $(".projectBtn");
    projectBtn.on("click", function () {
        const intro = $(".intro").offset();
        $("html, body").animate({scrollTop :  intro.top-100}, 1000)
    })

});