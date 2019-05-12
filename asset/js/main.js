$(document).ready(function () {

    var modal = document.getElementById('modal');

    var btn = document.getElementById("modalBtn");

    var close = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    close.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    if ($.browser.webkit) {

        $("#modal-text").text(" Thank you for downloading, You are using Chrome!!");
        $(".modal-content").addClass("chrome-style");

        $.browser.safari = false;

    } else if ($.browser.safari) {

        $("#modal-text").text(" Thank you for downloading, You are using Safari!!");
        $(".modal-content").addClass("safari-style");

    } else if ($.browser.mozilla) {

        $("#modal-text").text(" Thank you for downloading, You are using Firefox!!");
        $(".modal-content").addClass("firefox-style");

    } else if ($.browser.msedge) {

        $("#modal-text").text(" Thank you for downloading ,You are using Edge !!");
        $(".modal-content").addClass("edge-style");

    } else {
        $("#modal-text").text("Sorry,Browser Not Supported");
        $(".modal-content").addClass("other-style");
    }

});