// Toggling gender

let currentGender = document.querySelector('#edit-gender .show-selected-gender');
let genderRadioBtn = document.querySelectorAll('input[name="select_gender"]');

genderRadioBtn.forEach((btn) => {
    btn.addEventListener('click', function() {
        currentGender.innerText = btn.value;
    })
})


// Saving selected gender

function editGenderForm(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    let data = formDataToObject(formData);
    if(data.select_gender == 'Male' || data.select_gender == 'Female') {
        document.querySelector('#editUser #gender').value = data.select_gender;
        document.querySelector('#closeEditGenderModal').click();
    }
    else {
        return false;
    }
}