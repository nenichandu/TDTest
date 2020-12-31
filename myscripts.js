
    function submitForm(event) {
      event.preventDefault();
      var x, text;
      //Getting the value of the input field with id="edu"
      var title = document.getElementById("title").value;
      var firstName = document.getElementById("firstName").value;
      var middleName = document.getElementById("middleName").value;
      var lastName = document.getElementById("lastName").value;
      var email = document.getElementById("email").value;
      var ssn = document.getElementById("ssn").value;
      var dob = document.getElementById("dob").value;
      // If x is less than 0, input is invalid
      //otherwise input is valid

      var formValid = true;

      if (!title) {
        formValid = false;
        $("#title").removeClass("is-valid");
        $("#title").addClass("is-invalid");
      } else {
        $("#title").removeClass("is-invalid");
        $("#title").addClass("is-valid");
      }
      
      if (!firstName) {
        formValid = false;
        $("#firstName").removeClass("is-valid");
        $("#firstName").addClass("is-invalid");
      } else {
        $("#firstName").removeClass("is-invalid");
        $("#firstName").addClass("is-valid");
      }

      if (!middleName) {
        formValid = false;
        $("#middleName").removeClass("is-valid");
        $("#middleName").addClass("is-invalid");
      } else {
        $("#middleName").removeClass("is-invalid");
        $("#middleName").addClass("is-valid");
      }

      if (!lastName) {
        formValid = false;
        $("#lastName").removeClass("is-valid");
        $("#lastName").addClass("is-invalid");
      } else {
        $("#lastName").removeClass("is-invalid");
        $("#lastName").addClass("is-valid");
      }

      if (!email) {
        formValid = false;
        $("#email").removeClass("is-valid");
        $("#email").addClass("is-invalid");
      } else {
        $("#email").removeClass("is-invalid");
        $("#email").addClass("is-valid");
      }

      if (!dob) {
        formValid = false;
        $("#dob").removeClass("is-valid");
        $("#dob").addClass("is-invalid");
      } else {
        $("#dob").removeClass("is-invalid");
        $("#dob").addClass("is-valid");
      }

      if (!ssn) {
        formValid = false;
        $("#ssn").removeClass("is-valid");
        $("#ssn").addClass("is-invalid");
      } else {
        $("#ssn").removeClass("is-invalid");
        $("#ssn").addClass("is-valid");
      }
      if(formValid){
        document.getElementById("msg").innerHTML = "<div class='text-success pb-3' >Your Personal Details saved successfully</div>"
        return true;
      }else{
        document.getElementById("msg").innerHTML = "<div class='text-danger pb-3'>Please provide valid details</div>"
        return false;
      }
      
    }
    function resetForm(event) {
    document.getElementById("personalinfoform").reset();
    }
  