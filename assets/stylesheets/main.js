$(document).ready(function() {
    console.log( "ready!" );
    $(".menu-item").hover(function () {
        $(this).toggleClass("blue");
     });
});
