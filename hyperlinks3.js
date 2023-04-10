jQuery(
    function () {
        $("#jqLinks a").mouseover(
            function() {
                $(this).addClass("btnBackground");
            }
        )
        $("#jqLinks a").mouseout(
            function() {
                $(this).removeClass("btnBackground");
            }
        )
    }
); // master jQuery container
