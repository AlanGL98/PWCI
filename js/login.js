let formLogin = document.querySelector('#loginForm1');

formLogin.btnlogin.addEventListener('click', (e)=>{
    if (formLogin.user.value == '' ||
        formLogin.pass.value == ''){
        var validacion = document.querySelector('#error');
        e.preventDefault();
        validacion.classList.remove('hide');
    }
});