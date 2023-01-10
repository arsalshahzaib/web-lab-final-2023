$(function() {
    // this function will run after the page is done loading.
    $("#submitButton").click(handleSubmitButton);
});

function handleSubmitButton () {
    var username = $("#username").val();
    var password = $("#password").val();
    console.log("Username: " + username);
    console.log("Password: " + password);
    // function sendCreds() {
    //     $.ajax({
    //         type: "POST",
    //         url: "https://dummyjson.com/auth/login",
    //         data: username,
    //         dataType: "username",
    //         success: function (response) {
    //             console.log("username sent successful");
    //         }
    //     });
    //     $.ajax({
    //         type: "POST",
    //         url: "https://dummyjson.com/auth/login",
    //         data: password,
    //         dataType: "password",
    //         success: function (response) {
    //             console.log("password sent successful");
    //         }
    //     });
}
