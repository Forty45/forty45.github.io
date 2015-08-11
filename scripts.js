$(document).ready(function() {

    $('.switch-candy-blue input').click(function(){
        var target = "#" + $(this).data("target");
        $(".array").not(target).hide();
        $(target).show();
    });

    $('.switch-candy-green input').click(function(){
        var target = "#" + $(this).data("target");
        $(".contoured").not(target).hide();
        $(target).show();
    });

});
