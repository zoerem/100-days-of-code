// $(function(){
//     $(".container2").css("opacity", "0.01");
// });
 
$(".container1").hover(
    function(){
        $(this).toggle(1000, 0);
        $(".container2").delay(500).toggle(1000, 1);
        )},
    function(){
        $(".container2").toggle(1000, 0);
        $(this).delay().delay(500).toggle(1000, 1);
});



// on hover fadeOut the original div and fade in the new div
// working but they've got white backgrounds and won't work with transparent
// Could potentially put the second phrase behind the background image to start with