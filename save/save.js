$(()=>{


    // **************완성 과정**************
    let yDeg = 0;
    setInterval(() => {
        $(".processZone").css({"transform": `rotateX(-5deg) rotateY(${yDeg++}deg)`})
    }, 100);
    // **************완성 과정**************



    // **************3분할 슬라이더**************

    // 사진 입력
    let img = [
        "../img/slider-1.jpg",
        "../img/slider-2.jpg",
        "../img/slider-3.jpg",
        "../img/logo.png"
    ];
    
    // html 보이는 부분 생성
    const sliderPart = $(".sliderPart");
    // html 이미지 라인 생성
    let sliderLine = $('<div>').prop({
        className: 'sliderLine'
    });

    // html 생성
    img.forEach(el => {
        sliderLine.append(`<img class="sliderImg" src="${el}">`);
    });

    // html 추가
    img.forEach(el => {
        sliderPart.append(sliderLine.clone());
    });

    // width 값
    let Wnum = 600;
    // height 값
    let Hnum = 900;
    // transition 값
    let Tnum = 0.8;

    // css 추가 함수
    function cssSet(Wnum, Hnum, Tnum){
        let len = {
            "#sliderZone":["width", `${Wnum}px`, "height", `${Hnum}px`],
            ".sliderLine":["width", `${(Wnum*3)}px`, "height", `${(Hnum/3)}px`, "left", `-${Wnum}px`],
            ".sliderImg":["width", `${Wnum}px`, "height", `${Hnum}px`, "transition",`all ${Tnum}s ease`],

            ".sliderLine:nth-child(1)>.sliderImg:nth-child(1)":["left", "0px"],
            ".sliderLine:nth-child(2)>.sliderImg:nth-child(1)":["left", "0px"],
            ".sliderLine:nth-child(3)>.sliderImg:nth-child(1)":["left", "0px"],
            ".sliderLine:nth-child(1)>.sliderImg:nth-child(2)":["left", `${Wnum}px`],
            ".sliderLine:nth-child(2)>.sliderImg:nth-child(2)":["left", `${Wnum}px`],
            ".sliderLine:nth-child(3)>.sliderImg:nth-child(2)":["left", `${Wnum}px`],
            ".sliderLine:nth-child(1)>.sliderImg:nth-child(3)":["left", `${Wnum*2}px`],
            ".sliderLine:nth-child(2)>.sliderImg:nth-child(3)":["left", `${Wnum*2}px`],
            ".sliderLine:nth-child(3)>.sliderImg:nth-child(3)":["left", `${Wnum*2}px`],

            ".sliderLine:nth-child(2)>.sliderImg":["top", `-${(Hnum/3)}px`],
            ".sliderLine:nth-child(3)>.sliderImg":["top", `-${(Hnum/3)*2}px`]
        };

        for (const i in len) {
            for (const j in len[i]) if(j%2==1) $(i).css(len[i][j-1], len[i][j]);
        }
    }


    // 이미지 변환 함수
    function imgAdd(img, Wnum, Hnum, Tnum){
        let cnt = 0;

        cssSet(Wnum, Hnum, Tnum);
        
        setInterval(() => {
            if (cnt>=4) cnt=0;

            $(`.sliderLine:nth-child(1)>.sliderImg:nth-child(1)`).remove();
            $(`.sliderLine:nth-child(1)`).append(`<img class="sliderImg" src="${img[cnt]}">`);
            cssSet(Wnum, Hnum, Tnum);

            setTimeout(() => {
                $(`.sliderLine:nth-child(2)>.sliderImg:nth-child(1)`).remove();
                $(`.sliderLine:nth-child(2)`).append(`<img class="sliderImg" src="${img[cnt]}">`);
                cssSet(Wnum, Hnum, Tnum);

                setTimeout(() => {
                    $(`.sliderLine:nth-child(3)>.sliderImg:nth-child(1)`).remove();
                    $(`.sliderLine:nth-child(3)`).append(`<img class="sliderImg" src="${img[cnt++]}">`);
                    cssSet(Wnum, Hnum, Tnum);
                }, 800);

            }, 800);

        }, 4000);

    }
    
    // 함수 실행
    imgAdd(img, Wnum, Hnum, Tnum)
    
    // **************3분할 슬라이더**************
});