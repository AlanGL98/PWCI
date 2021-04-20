var padre = document.querySelector('#secciones');
var botones = padre.querySelectorAll('.bs');

//Botones para submenus en el panel del menu
botones.forEach(function (boton, i) {
    boton.addEventListener('click', ()=>{
        padre.querySelectorAll('.s').forEach((panel, j) =>{
            //panel.classList.remove('sm-activo');
            if(i == j){
                //panel.classList.add('sm-activo');
                panel.classList.toggle('s-activo');
            }
        });
    });
});