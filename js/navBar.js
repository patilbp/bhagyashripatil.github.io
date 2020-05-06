// JavaScript source code

//SpaceDiv width change with window resize
$(window).on("resize", function ()
{
    var winWidth = $(window).width();
    var calculatedSpace;
    if (winWidth => 1000)
    {
        calculatedSpace = 40;
        $('#logo').css('width', '70%');
    }
    else if (winWidth => 800 && winWidth < 1000)
    {
        calculatedSpace = 20;
        $('#logo').css('width', '40%');
    }
    else
    {
        calculatedSpace = 5;
        $('#logo').css('width', '30%');
    }
    var calString = calculatedSpace + '%';
    $('.spaceDiv').css('width', calString);
});
$(window).trigger('resize');
