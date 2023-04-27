// Saving selected username

function editUsernameForm(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    let data = formDataToObject(formData);
    document.querySelector('#editUser #username').value = data.username;
    document.querySelector('#closeEditUsernameModal').click();
}