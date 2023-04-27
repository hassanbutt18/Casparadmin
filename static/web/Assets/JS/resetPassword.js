// Handling Reset Password Form


function resetPasswordForm(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    let data = formDataToObject(formData);
    let newPasswordField = form.querySelector('input[name="newpassword"]');
    let confirmPasswordField = form.querySelector('input[name="confirmpassword"]');
    let newPasswordMsg = newPasswordField.closest('.password-input').querySelector('.password-msg');
    let confirmPasswordMsg = confirmPasswordField.closest('.password-input').querySelector('.password-msg');

    if(!isValidPassword(newPasswordField)) {
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
        location.href = location.origin + '/signin/';
    }

}