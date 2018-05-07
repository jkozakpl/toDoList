// Check off specific todos by clicking

$("ul").on("click", "li", function() {
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    // 	$(this).css({
    // 		color: "black",
    // 		textDecoration: "none"
    // 	});
    // } else {
    // 	$(this).css({
    // 		color: "grey",
    // 		textDecoration: "line-through"
    // 	});
    // }
    $(this).toggleClass("completed");
});

// Click on X to delete todo

$("ul").on("click", "span", function(evt) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    evt.stopPropagation();
});

// Add a new todo

$("input[type='text']").on("keypress", function(evt) {
    if (evt.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})