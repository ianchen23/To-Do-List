$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).remove()});
    event.stopPropagation();
});

$("input[type='text']").keypress(function(key){
    if (key.which === 13) {
        var input = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + input + "</li>");
    }
});

$("h1").on("click", ".fa-plus", function(){
    $("input[type='text']").slideDown();
    $(this).removeClass("fa-plus");
    $(this).addClass("fa-minus");
});

$("h1").on("click", ".fa-minus", function(){
    $("input[type='text']").slideUp();
    $(this).addClass("fa-plus");
    $(this).removeClass("fa-minus");
});

$("h1").on("click", ".fa-trash", function(){
    $("span").css("width","40px");
    $("span").css("opacity", "1.0");
    $(this).addClass("fa-check");
    $(this).removeClass("fa-trash");
})

$("h1").on("click", ".fa-check", function(){
    $("span").css("width","0px");
    $("span").css("opacity", "0");
    $(this).addClass("fa-trash");
    $(this).removeClass("fa-check");
})

// $(document).ready(function(){
//     $("input[type='text']").slideUp();
// });