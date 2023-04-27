// Handling Verify Code Form

function verifyCodeForm(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    let data = formDataToObject(formData);

    location.href = location.origin + '/reset-password/';
}