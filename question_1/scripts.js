$(function() {
    // this function will run after the page is done loading.
    $("#submitButton").click(handleSubmitButton);
});

function handleSubmitButton () {
    var username = $("#username").val();
    var password = $("#password").val();
    console.log(username);
    console.log(password);
}