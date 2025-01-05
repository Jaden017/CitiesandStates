function validateForm() {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
        alert("Email addresses do not match.");
    } else {
        alert("Form submitted successfully!");
    }
}

