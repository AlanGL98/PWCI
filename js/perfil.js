//window.onload = () => {
    var padre = document.querySelector('#padre-contenedor');
    var botones = padre.querySelectorAll('.btn-pw');

    //var paneles = document.querySelector('#paneles').querySelectorAll('.tab-panel');
    
    // console.log('Botones: ' + botones.length);
    // console.log('Paneles: ' + paneles.length);
    
    botones.forEach(function (boton, i) {
        boton.addEventListener('click', ()=>{
            document.querySelector('#paneles').querySelectorAll('.tab-panel').forEach((panel, j) =>{
                panel.classList.remove('activo');
                if(i == j){
                    panel.classList.add('activo');
                }
            });
            let info = document.querySelector('.info');
            info.textContent = boton.textContent;
            // console.log(boton.textContent);
            // console.log(i);
        });
    });
    
    document.getElementById("file").onchange = function(e) {
        // Creamos el objeto de la clase FileReader
        let reader = new FileReader();
      
        // Leemos el archivo subido y se lo pasamos a nuestro fileReader
        reader.readAsDataURL(e.target.files[0]);
      
        // Le decimos que cuando este listo ejecute el código interno
        reader.onload = function(){
            let preview = document.getElementById('preview');
            let img = document.getElementById('img');

            img.src = reader.result;
            
            preview.innerHTML = '';
            preview.append(img);
        };
    }

    let formPass = document.querySelector('#cambia-pass');

    formPass.btnEditPass.addEventListener('click', (e)=>{
        if(formPass.newPass.value != formPass.confirmNewPass.value){
            e.preventDefault();
        }
        if(formPass.currentPass.value == '' ||
            formPass.newPass.value == '' ||
            formPass.confirmNewPass.value == ''){
            e.preventDefault();
        }
    });

    let formEditUser = document.querySelector('#cambiaDatos');

    formEditUser.btnEditUser.addEventListener('click', (e)=>{
        if(formEditUser.nombre.value == '' ||
            formEditUser.apellidoP.value == '' ||
            formEditUser.apellidoM.value == ''){
            e.preventDefault();
        }
    });

    // let formCreaNota = document.querySelector('#crea-nota');

    // formCreaNota.btnCreaNota.addEventListener('click', (e)=>{
    //     if(formCreaNota.titulo.value == '' ||
    //         formCreaNota.descripcion. value == '' ||
    //         formCreaNota.tipo. value == '0'){
    //             e.preventDefault();
    //     }
    // });
//};