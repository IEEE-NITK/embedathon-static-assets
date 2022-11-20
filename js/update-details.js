function checkDetailsValidity(form) {
    phone = form.phone.value.toString();

    if (phone.toString().length < 10) {
        form.phone.setCustomValidity("Phone number must be 10 digits");
        return false;
    }
    form.phone.setCustomValidity('');

    return true;
}

function checkPasswordValidity(form) {
    password = form.newPassword.value;
    confirmation = form.confirmPassword.value;

    if (password != confirmation || password == '' || confirmation == '') {
        form.newPassword.setCustomValidity("Passwords don't match");
        form.confirmPassword.setCustomValidity("Passwords don't match");
        return false;
    }
    form.newPassword.setCustomValidity('');
    form.confirmPassword.setCustomValidity('');

    return true;
}
