// Saving selected app language

function editAppLanguageForm(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    let data = formDataToObject(formData);
    document.querySelector('#editUser #app-language').value = data.app_language;
    document.querySelector('#closeEditAppLanguageModal').click();
}