window.onload = () =>{
    var padre = document.querySelector('#menu');
    var botones = padre.querySelectorAll('.bsm');
    
    //Botones para submenus en el panel del menu
    botones.forEach(function (boton, i) {
        boton.addEventListener('click', ()=>{
            padre.querySelectorAll('.sm').forEach((panel, j) =>{
                //panel.classList.remove('sm-activo');
                if(i == j){
                    //panel.classList.add('sm-activo');
                    panel.classList.toggle('sm-activo');
                }
            });
        });
    });

    //Botones para abrir y cerrar el panel del menu
    var btnMenu = document.querySelector('#btn-menu');
    var btnCerrar = document.querySelector('#cerrar');

    btnMenu.addEventListener('click', ()=>{
        padre.classList.add('menu-activo');
    });

    btnCerrar.addEventListener('click', ()=>{
        padre.classList.remove('menu-activo');
    });


    //Formulario de busqueda
    var formBuscar = document.querySelector('#formBuscar');

    formBuscar.btnBuscar.addEventListener('click', (e) =>{
        if(formBuscar.txtBuscar.value == ''){
            e.preventDefault();
        }
    });
}