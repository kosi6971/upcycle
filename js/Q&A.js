$(()=>{
    const contentBody = $(".contentBody");
    let saveP = 0;

    contentBody.on("click", function () {
        const thisBody = $(this)
        const thisNotBody = thisBody.siblings()

        if(thisBody.attr("value") == saveP){
            thisBody.css(
                "height", "51px"
            );
        }
        else{
            thisBody.css({
                "height" : "1550px",
                "border-bottom" : "1px solid #CDD9C5;"
            });
        }

        thisNotBody.css({
            "height" : "51px",
            "border-bottom" : "0px solid #CDD9C5;"
        });

        if(thisBody.attr("value") == saveP) saveP = 0;
        else saveP = thisBody.attr("value")
    })
    
});