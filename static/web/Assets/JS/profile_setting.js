// Preview Image on profile form

function previewImage(event) {
    let image = event.currentTarget.files;
    let imageTag = document.getElementById('profile-image');
    imageTag.src = window.URL.createObjectURL(image[0]);
}


// Handling Profile Form

function profileForm(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    let data = formDataToObject(formData);
    let nameField = form.querySelector('input[name="name"]');
    let emailField = form.querySelector('input[name="email"]');
    let currentPasswordField = form.querySelector('input[name="current_password"]');
    let newPasswordField = form.querySelector('input[name="new_password"]');
    let confirmPasswordField = form.querySelector('input[name="confirm_password"]');
    let nameMsg = form.querySelector('.name-msg');
    let emailMsg = form.querySelector('.email-msg');
    let currentPasswordMsg = currentPasswordField.closest('.password-input').querySelector('.password-msg');
    let newPasswordMsg = newPasswordField.closest('.password-input').querySelector('.password-msg');
    let confirmPasswordMsg = confirmPasswordField.closest('.password-input').querySelector('.password-msg');

    if(!isValidName(nameField)) {
        nameField.classList.add('input-error');
        nameMsg.classList.add('active');
        nameField.addEventListener('input', function() {
            if(isValidName(this)) {
                this.classList.remove('input-error');
            }
            else {
                let inputField = this;
                if(timeOut) {
                    clearTimeout(timeOut);
                }
                timeOut = setTimeout(function() {
                    inputField.classList.add('input-error');
                    nameMsg.classList.add('active');
                }, 1500);
            }
        })
        return false;
    }
    else if(!isValidEmail(emailField)) {
        emailField.classList.add('input-error');
        emailMsg.classList.add('active');
        emailField.addEventListener('input', function() {
            if(isValidEmail(this)) {
                this.classList.remove('input-error');
            }
            else {
                let inputField = this;
                if(timeOut) {
                    clearTimeout(timeOut);
                }
                timeOut = setTimeout(function() {
                    inputField.classList.add('input-error');
                    emailMsg.classList.add('active');
                }, 1500);
            }
        })
        return false;
    }
    else if(!isValidPassword(currentPasswordField)) {
        currentPasswordField.classList.add('input-error');
        currentPasswordMsg.classList.add('active');
        currentPasswordField.addEventListener('input', function() {
            if(isValidPassword(this)) {
                this.classList.remove('input-error');
            }
            else {
                let inputField = this;
                if(timeOut) {
                    clearTimeout(timeOut);
                }
                timeOut = setTimeout(function() {
                    inputField.classList.add('input-error');
                    currentPasswordMsg.classList.add('active');
                }, 1500);
            }
        })
        return false;
    }
    else if(!isValidPassword(newPasswordField)) {
        newPasswordField.classList.add('input-error');
        newPasswordMsg.classList.add('active');
        newPasswordField.addEventListener('input', function() {
            if(isValidPassword(this)) {
                this.classList.remove('input-error');
            }
            else {
                let inputField = this;
                if(timeOut) {
                    clearTimeout(timeOut);
                }
                timeOut = setTimeout(function() {
                    inputField.classList.add('input-error');
                    newPasswordMsg.classList.add('active');
                }, 1500);
            }
        })
        return false;
    }
    else if(!isValidPassword(confirmPasswordField)) {
        confirmPasswordField.classList.add('input-error');
        confirmPasswordMsg.classList.add('active');
        confirmPasswordField.addEventListener('input', function() {
            if(isValidPassword(this)) {
                this.classList.remove('input-error');
            }
            else {
                let inputField = this;
                if(timeOut) {
                    clearTimeout(timeOut);
                }
                timeOut = setTimeout(function() {
                    inputField.classList.add('input-error');
                    confirmPasswordMsg.classList.add('active');
                }, 1500);
            }
        })
        return false;
    }
    else if(!matchingPassword(newPasswordField, confirmPasswordField)) {
        confirmPasswordField.classList.add('input-error');
        confirmPasswordMsg.classList.add('active');
        return false;
    }
    else {
        console.log(data);
        //
    }
}