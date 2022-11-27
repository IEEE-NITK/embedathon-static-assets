function checkFormValidity(form) {
    password = form.password.value;
    confirmation = form.confirmation.value;
    phone = form.phone.value.toString();

    if (phone.toString().length < 10) {
        form.phone.setCustomValidity("Phone number must be 10 digits");
        return false;
    }
    form.phone.setCustomValidity('');

    if (password != confirmation || password == '' || confirmation == '') {
        form.password.setCustomValidity("Passwords don't match");
        form.confirmation.setCustomValidity("Passwords don't match");
        return false;
    }
    form.password.setCustomValidity('');
    form.confirmation.setCustomValidity('');

    return true;
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
