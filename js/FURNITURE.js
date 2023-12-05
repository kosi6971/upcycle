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

    pointBtn.on('click', function(e){
        movePoint(Number(e.target.value))
    });

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