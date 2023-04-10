
"use strict";
$(document).ready( () => {
    

$("#new-account-form").on("submit", function (event) {
    event.preventDefault();

    function isValidEmail() {
        const emailPattern = /^[a-zA-Z0-9._=]+@[a-zA-Z0-9.=]+\.[a-zA-Z]{2,4}$/;
        const em = $.trim($("input[name='email']").val());
        var emailError = $("<p>")
        emailError.text = "Enter a valid e-mail address."

        if (emailPattern.test(em)) {
            $("body").appendTo(em);
            return true;
        }
        else  {
            $("body").appendTo(emailError);
            return false;
        }
    }
     const pass = $(this).find("input[name='password1']").val().trim;
     function isPasswordValid() {
        const passPattern = /^[a-zA-Z0-9._=]+@[a-zA-Z0-9.=]+\.[a-zA-Z]{2,4}$/;
        if (passPattern.test(pass)) {
            return true;
        }
        else {
            return false;
        }

    }
    
    const pass2= $(this).find("input[name='password2']").val().trim;
    var passwordError = ("<p>")
    passwordError.text = "Your passwords don't match."

        if(pass1 != pass2) {
        $("body").appendTo(passwordError);
        return false;
        }
        else {
            $("body").appendTo(pass2);
            return true;
        }
});
});
$("input").focus(function() {
    clearResults();
 });
