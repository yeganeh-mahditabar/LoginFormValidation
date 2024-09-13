let userNameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');

function dataValidation() {
    let userNameValue = userNameInput.value;
    let passwordValue = passwordInput.value;
    
    if(userNameValue.length < 12 || passwordValue.length < 8) {
        modal.style.display = 'inline';

        setTimeout(function() {
            modal.style.display = 'none';
        }, 3000);
    } else {
        modal.style.background = 'green';
        modal.innerHTML = 'لاگین با موفقیت انجام شد';
        modal.style.display = 'inline';
    }
}