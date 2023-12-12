$(()=>{
    const contentBody = $(".contentBody");
    let saveP = 0;

    contentBody.on("click", function () {
        const thisBody = $(this)
        const thisNotBody = thisBody.siblings(".contentBody")

        if(thisBody.attr("value") == saveP){
            thisBody.css({
                "height" : "51px"
            });
        }
        else{
            thisBody.css({
                "height" : "800px"
            });
        }

        thisNotBody.css({
            "height" : "51px"
        });

        if(thisBody.attr("value") == saveP) saveP = 0;
        else saveP = thisBody.attr("value")
    })
    
});