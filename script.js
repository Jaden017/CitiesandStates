function validateEmail() {
    const email1 = document.getElementById('email');
    const email2 = document.getElementById('confirmEmail');
    if (email1.value !== email2.value) {
        alert("Emails do not match!");
        return false;
    }
    return true;
}
