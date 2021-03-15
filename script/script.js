$(function() {

    setInterval (fnSlide, 3000);

    function fnSlide() {
        $("div#shuttleFrame").animate({
            "margin-top":"-350px"
        },
        1000,
        "swing",
        function() {
            $("a:first-child").insertAfter("a:last-child")
            $("div#shuttleFrame").css({"margin-top":"0px"});
        });
    }

});
