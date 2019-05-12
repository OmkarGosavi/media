$(document).ready(function () {

    var modal = document.getElementById('Modal');
    console.log(modal);

    var btn = document.getElementById("ModalBtn");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    if ($.browser.webkit) {

        $("#modal-text").text(" Thank you for downloading, You are using Chrome!!");
        $(".modal-content").css({
            'position': 'fixed',
            'top': '0',
            'right': '0'
        });
        $.browser.safari = false;

    } else if ($.browser.safari) {

        $("#modal-text").text(" Thank you for downloading, You are using Safari!!");
        $(".modal-content").css({
            'position': 'fixed',
            'top': '0',
            'right': '0'
        });

    } else if ($.browser.mozilla) {

        $("#modal-text").text(" Thank you for downloading, You are using Firefox!!");
        $(".modal-content").css({
            'position': 'fixed',
            'top': '0',
            'left': '0'
        });

    } else if ($.browser.msedge) {

        $("#modal-text").text(" Thank you for downloading ,You are using Edge !!");
        $(".modal-content").css({
            'position': 'fixed',
            'left': '0',
            'right': '0',
            'bottom': '0',
            'margin': '0 auto',

        });

    } else {
        $("#modal-text").text("Sorry,Browser Not Supported");
        $(".modal-content").css({
            'position': 'fixed',
            'left': '0',
            'right': '0',
            'top': '0',
            'bottom': '0',
            'margin': 'auto',
            'height': '15%'

        });
    }

});