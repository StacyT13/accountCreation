
"use strict";

    let em = "";

    function isValidEmail() { 
        em = $.trim($("input[name='email']").val());
        const emailPattern = /^[a-zA-Z0-9._=]+@[a-zA-Z0-9.=]+\.[a-zA-Z]{2,4}$/;
        if (emailPattern.test(em)) {
            return true;
        }
        else  {
            //$("body").appendTo(emailError);
            $("#emailError").html("Invalid E-mail address.");
            return false;
        }
    }
      
     function isPasswordValid() {
        var em = '<p>' + em + '</p>';
        var pass1 = $.trim($("input[name='password1']").val());
        var pass2 = $.trim($("input[name='password2']").val());
        if ((pass1 !='') && (pass1 === pass2)) {
            return true;
        }
        else {

            $("#passwordError").html("Passwords don't match.");
            return false;
        }

    }

    function clearResults() {
        $('#output').empty();
        $('#emailError').empty();
        $('#passwordError').empty();
    }
    
    $("input").focus(function() {
        clearResults();
    });

    $(document).on("submit", function(event) {
        event.preventDefault();
        clearResults();

        if (isPasswordValid() && isValidEmail() ){
            var emval = '<p>' + em + '<p>';
           // $('#output').append("<p>Form output:</p>");
            $('#output').append(emval);
            $('#output').append('Passwords match');
        }     
    });
