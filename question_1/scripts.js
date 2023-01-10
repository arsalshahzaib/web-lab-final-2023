$(function() {
    // this function will run after the page is done loading.
    $("#submitButton").click(handleSubmitButton);
});

function handleSubmitButton () {
    var username = $("#username").val();
    var password = $("#password").val();
    console.log(username);
    console.log(password);
    function sendCreds() {
        $.ajax({
            url: "https://dummyjson.com/auth/login",
            method: "POST",
            success: function(response) {
                console.log(response);
            }
        });
    }
}