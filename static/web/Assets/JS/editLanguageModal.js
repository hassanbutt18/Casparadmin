// Saving selected language

function editLanguageForm(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    let data = formDataToObject(formData);
    document.querySelector('#editUser #language').value = data.language;
    document.querySelector('#closeEditLanguageModal').click();
}