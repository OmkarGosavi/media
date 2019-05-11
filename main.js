$(document).ready(function () {
    if ($.browser.webkit) {

        $("#modal-text").text(" Thank you for downloading, You are using Chrome!!");
        $(".modal-content").css({
            'position': 'fixed',
            'top': '0',
            'right': '0'
        });
        $.browser.safari = false;

    } else if ($.browser.safari) {
        /* Do something for Safari */

        $("#modal-text").text(" Thank you for downloading, You are using Safari!!");
        $(".modal-content").css("position", "fixed",
            "top", "0",
            "right", "0");


    } else if ($.browser.mozilla) {

        $("#modal-text").text(" Thank you for downloading, You are using Firefox!!");
        $(".modal-content").css("position", "fixed",
            "top", "0");


    } else if ($.browser.msedge) {

        $("#modal-text").text(" Thank you for downloading ,You are using Edge !!");
        $(".modal-content").css("position", "fixed",
            "left", "0",
            "right", "0",
            "margin", "auto");


    } else {
        $("#modal-text").text("Sorry,Browser Not Supported");

    }


});