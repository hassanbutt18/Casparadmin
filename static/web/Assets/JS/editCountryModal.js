// Saving selected country

function editCountryForm(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    let data = formDataToObject(formData);
    document.querySelector('#editUser #country').value = data.country;
    document.querySelector('#closeEditCountryModal').click();
}