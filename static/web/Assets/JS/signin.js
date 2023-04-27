// Handling Signin Form

function signinForm(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    let data = formDataToObject(formData);
    let emailField = form.querySelector('input[name="email"]');
    let passwordField = form.querySelector('input[name="password"]');
    let emailMsg = form.querySelector('.email-msg');
    let passwordMsg = form.querySelector('.password-msg');

    if(!isValidEmail(emailField)) {
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
    else if(!isValidPassword(passwordField)) {
        passwordField.classList.add('input-error');
        passwordMsg.classList.add('active');
        passwordField.addEventListener('input', function() {
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
                    passwordMsg.classList.add('active');
                }, 1500);
            }
        })
        return false;
    }
    else {
        location.href = location.origin + '/dashboard/';
    }

}