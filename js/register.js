function checkFormValidity(form) {
    password = form.password.value;
    confirmation = form.confirmation.value;
    phone = form.phone.value.toString();
    email = form.email.value;

    let isPhoneValid = true;
    if (phone.toString().length < 10) {
        form.phone.setCustomValidity("Phone number must be 10 digits");
        isPhoneValid = false;
    }
    if (isPhoneValid) {
        form.phone.setCustomValidity('');
    }

    let isPasswordValid = true;
    if (password != confirmation || password == '' || confirmation == '') {
        form.password.setCustomValidity("Passwords don't match");
        form.confirmation.setCustomValidity("Passwords don't match");
        isPasswordValid = false;
    }
    if (isPasswordValid) {
        form.password.setCustomValidity('');
        form.confirmation.setCustomValidity('');
    }

    let isEmailValid = true;
    if (document.getElementById("is_nitk").checked) {
        let nitkRegex = /^[A-Za-z0-9._%+-]+@nitk\.edu\.in$/;
        if (!nitkRegex.test(email)) {
            document.getElementById("emailError").textContent = "Provide a valid NITK EDU Email ID!";
            form.email.setCustomValidity("Not a NITK EMAIL ID");
            isEmailValid = false;
        }
    }
    else {
        let mailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (!mailRegex.test(email)) {
            document.getElementById("emailError").textContent = "Provide a valid Email ID!";
            form.email.setCustomValidity("Not a valid email id");
            isEmailValid = false;
        }
    }
    if (isEmailValid) {
        form.email.setCustomValidity('');
    }

    return isPhoneValid && isPasswordValid && isEmailValid;
}

let currentCollege = "";

function NITKToggle(checkbox) {
    const college = document.getElementById('college');
    if (checkbox.checked) {
        currentCollege = college.value;
        college.value = 'NITK, Surathkal';
        college.readOnly = true;
    } else {
        college.value = currentCollege;
        college.readOnly = false;
    }
}
