// jQuery practice

$(function() {
    // jQuery will execute this function after the page loading
    // so do your bindings here..
    $("#addButton").click(handleButtonClick);
    $("#todo").on("click", "li", removeTODO);
});

function handleButtonClick() {
    // alert("Button Clicked.");
    var newTODO = $("#add-new-todo").val();
    if (!newTODO) {
        $("#add-new-todo").addClass("error");
        return;
    }
    $("#add-new-todo").removeClass("error");
    $("#todo").append("<li>" + newTODO + "</li>");
    $("#add-new-todo").val("");
    // $("#todo li").click(removeTODO); DRY
}

function removeTODO() {
    $(this).fadeOut();
}