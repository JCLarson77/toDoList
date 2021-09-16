//check off to-dos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//need to use .on() instead of .click() so it will work on new lis
//Can only use on() to add a listener to previously existing
//elements, hence $("ul") instead of $("li")^ and $("span")v

//click on X to delete toDo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove()
    });
    //stop "bubbling"
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        //grab new to-do text from input
        var toDoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input").fadeToggle();
})
