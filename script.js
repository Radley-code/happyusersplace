// Client-side form validation script
const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const UNInput = document.getElementById("UN");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const UNError = document.getElementById("UNError");
    const genderError = document.getElementById("genderError");

    form.addEventListener("submit", (e) => {
      let isValid = true;

      if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
      } else {
        nameError.textContent = "";
      }
      
      if (UNInput.value.trim() === "") {
        UNError.textContent = "Please enter your Username.";
        isValid = false;
      } else {
        UNError.textContent = "";
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      } else {
        emailError.textContent = "";
      }

      // Gender (radio) validation
      const genderRadios = document.getElementsByName("Gender");
      let genderSelected = false;
      for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
          genderSelected = true;
          break;
        }
      }
      if (!genderSelected) {
        genderError.textContent = "Please select your gender.";
        isValid = false;
      } else {
        genderError.textContent = "";
      }

      if (!isValid) {
        e.preventDefault();
      }
    }); 
    
    function PreRestProc(myform){
      if (confirm("Are you sure you want to clear the form ?"))
    {
      myform.name.focus();
      return (true);
    }
    else{
      myform.name.focus();
      return(false);
    }
    }

    form.addEventListener("submit", (e) => {
      let isValid = true;

      if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
      } else {
        nameError.textContent = "";
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      } else {
        emailError.textContent = "";
      }

      if (!isValid) {
        e.preventDefault();
      
      }
    });