$(()=>{
    console.log("furniture.js start");
    
    const screen = $(".furnitureIntroImgInZone>img");
    const btn = $(".furnitureIntroBtnZone>img");
    
    btn.click(function(){
        let clickBtnNum = $(this).index();
        let clickScreen = screen.eq(clickBtnNum)

        clickScreen.css({
            "top": "0",
            "opacity" : "1"
        }).siblings().css({
            "top" : "100%",
            "opacity" : "0"
        })

    });

    setTimeout(()=>{
        furniturIntroEvent()
    }, 1000);

    // **************재료 소개*************
    let pointBtn = $(".materialMainImg>button");
    let stopCnt = 0;
    let savePoint = 0;

    pointBtn.on('click', function(e){
        movePoint(Number(e.target.value))
    });

    pointBtn.hover(function (e) {
        hoverPoint(Number(e.target.value))
    }, function () {
    })

    function hoverPoint(num) {
        let pointText = $(`.materialMainImg>p:nth-of-type(${num-1})`)

        if(savePoint != num && savePoint != 0)pointText.siblings("p").text("")

        if(stopCnt)return;
        stopCnt = 1;
        setTimeout(()=>{
            stopCnt = 0; // 해제
        }, 1000);

        pointText.text("")
        
        let typingBool = false; 
        let typingIdx=0; 

        // 타이핑될 텍스트를 가져온다
        let typingTxt; 
        switch (num) {
            case 2:
                typingTxt = "Macrame"
                break;
            case 3:
                typingTxt = "Rattan"
                break;
            case 4:
                typingTxt = "Wood Stain"
                break;
        
            default:
                break;
        }

        typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

        if(typingBool==false){ 
          // 타이핑이 진행되지 않았다면 
           typingBool=true;     
           let tyInt = setInterval(typing,100); // 반복동작 
        } 

        function typing(){ 
          if(typingIdx<typingTxt.length){ 
            // 타이핑될 텍스트 길이만큼 반복 
            $(`.materialMainImg>p:nth-of-type(${num-1})`).append(typingTxt[typingIdx]);
            // 한글자씩 이어준다. 
            typingIdx++; 
           } else{ 
             //끝나면 반복종료 
            clearInterval(tyInt); 
           } 
        } 
        
        savePoint = num;
    }

    function movePoint(num){
        let upFur = $(`.materialScreen:nth-of-type(${num})`)
        let downFur = upFur.siblings()

        upFur.css({
            "opacity" : "1"
        });

        downFur.css({
            "opacity" : "0"
        });
    }
    // **************재료 소개*************

});

// **************가구 간단 소개*************
function furniturIntroEvent() {
    const furniturIntroImgZone = $(".furniturIntroImgZone")
    const furniturIntroTextZone = $(".furniturIntroTextZone")

    $(".furniturTextOp1").css("opacity", "0");
    setTimeout(() => {
        furniturIntroImgZone.css("left", "65%");
        $(".furnitureImgOp1").css("opacity", "0");
        $(".furnitureImgOp2").css("opacity", "1");
        furniturIntroTextZone.css("left", "3%");
        setTimeout(() => {
            $(".furniturTextOp2").css("opacity", "1");
        }, 1500);
    }, 500);
}
// **************가구 간단 소개*************