var padre = document.querySelector('#contenido');
var cards = padre.querySelectorAll('.card-curso');
    
cards.forEach(function (card, i) {
    //Muestra detalles
    card.addEventListener('mouseover', ()=>{
        padre.querySelectorAll('.detalles').forEach((panel, j) =>{
            panel.classList.remove('d-activo');
            if(i == j){
                //panel.classList.add('sm-activo');
                panel.classList.add('d-activo');
            }
        });
    });

    //Quita los detalles
    card.addEventListener('mouseout', ()=>{
        padre.querySelectorAll('.detalles').forEach((panel, j) =>{
            panel.classList.remove('d-activo');
        });
    });
});