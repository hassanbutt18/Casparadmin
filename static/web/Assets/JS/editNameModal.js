// Saving selected name

function editNameForm(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    let data = formDataToObject(formData);
    document.querySelector('#editUser #name').value = data.name;
    document.querySelector('#closeEditNameModal').click();
}