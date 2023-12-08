$(()=>{
    console.log("portfplio.js start");
    
    const screen = $(".furnitureScreen");
    const btn = $(".furnitureBtnZone>button");

    btn.click(function(){
        let clickBtnNum = $(this).index();
        let clickScreen = screen.eq(clickBtnNum)
        
        let furniturIntroBtnZone = $(".furniturIntroductionBtnZone")
        if(clickBtnNum == 4){
            

            furniturIntroBtnZone.css({
                "height": "100%",
                "top": "0"
            })

        }
        else{
            furniturIntroBtnZone.css({
                "height": "0",
                "top": "94%"
            })
        }


        $(this).css({
            "color": "red",
            "border-top": "1px solid red",
            "border-bottom": "1px solid red"
        }).siblings("button").css({
            "color": "black",
            "border-top": "1px solid black",
            "border-bottom": "1px solid black",
        })

        clickScreen.css({
            "top": "0",
            "opacity" : "1"
        }).siblings().css({
            "top" : "100%",
            "opacity" : "0"
        })

    });

    
    
    // **************가구 이미지 소개**************
    let furBtn = $(".furniturIntroductionBtn");

    furBtn.on('click', function(e){
        moveFur(Number(e.target.value))
    });

    function moveFur(num){
        let upFur = $(`.furniturIntroductionScreenZone>.furniturIntroductionScreen:nth-child(${num})`)
        let downFur = upFur.siblings()

        upFur.css({
            "left" :'50%',
            "opacity" : "1"
        });

        downFur.css({
            "left" :'100%',
            "opacity" : "0"
        });
    }
    
    // **************가구 이미지 소개**************

});