$(document).ready(function () {
    if ($.browser.webkit) {
       
        $("#modal-text").text(" Thank you for downloading, You are using Chrome!!");
        $.browser.safari = false;

    } else if ($.browser.safari) {
        /* Do something for Safari */
       
        $("#modal-text").text(" Thank you for downloading, You are using Safari!!");

    } else if ($.browser.mozilla) {
       
        $("#modal-text").text(" Thank you for downloading, You are using Firefox!!");
        
    } else if ($.browser.msedge) {

        $("#modal-text").text(" Thank you for downloading ,You are using Edge !!");

    } else {
        $("#modal-text").text("Sorry,Browser Not Supported");

    }
   

});