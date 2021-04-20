var padre = document.querySelector('#contenido');
var botones = padre.querySelectorAll('.panel');
    
botones.forEach(function (boton, i) {
    boton.addEventListener('click', ()=>{
        padre.querySelectorAll('.form').forEach((panel, j) =>{
            panel.classList.remove('form-activo');
            if(i == j){
                panel.classList.add('form-activo');
                var error = document.querySelector('#error');
                error.classList.remove('e-activo');
            }
        });
    });
});

var formLogin = document.querySelector('#formLogin');

formLogin.btnLogin.addEventListener('click', (e)=>{
    if(formLogin.txtUser.value == ''||
        formLogin.txtPass.value == ''){
         e.preventDefault();
         var error = document.querySelector('#error');
         error.innerHTML = '<h4>Datos incorrectos verifique usuario y/o contraseña incorrectos</h4>'
         error.classList.add('e-activo');
    }
});

var formSign = document.querySelector('#formSign');

formSign.btnSign.addEventListener('click', (e)=>{
    //alert('hola');
    if(formSign.txtEmail.value == ''||
    formSign.txtUser.value == ''||
    formSign.txtPass.value == ''||
    formSign.txtCPass.value == ''){
         e.preventDefault();
         var error = document.querySelector('#error');
         error.innerHTML = '<h4>Verifique que todos los datos sean correctos para poder registrar este usuario.</h4>'
         error.classList.add('e-activo');
    }
});