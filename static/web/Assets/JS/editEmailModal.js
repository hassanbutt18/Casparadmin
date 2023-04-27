// Saving selected email

function editEmailForm(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    let data = formDataToObject(formData);
    document.querySelector('#editUser #email').value = data.email;
    document.querySelector('#closeEditEmailModal').click();
}