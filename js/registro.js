let formLogin = document.querySelector('#registrar');
var validacion = document.querySelector('#error');

formLogin.btnRegistrar.addEventListener('click', (e)=>{
    validacion.classList.add('hide');

    if (formLogin.email.value == '' ||
        formLogin.usuario.value == '' ||
        formLogin.nombre.value == '' ||
        formLogin.apellido.value == '' ||
        formLogin.pass.value == '' ||
        formLogin.Cpass.value == ''){
        e.preventDefault();
        validacion.classList.remove('hide');
    }
});