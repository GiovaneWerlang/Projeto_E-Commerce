
function validarCampoObrigatorio(campo){
    if(campo != ''){
        return true;
    }
    return false;
}

function validaCadastro(){

        let erros = [];

        if(!validarCampoObrigatorio($('#email-login').val())){
            erros.push(0);
        }
        if(validarEmail($('#email-login').val()) === null){
            if(!erros.includes(0)){
                erros.push(0);
            }
        }
        if(!validarCampoObrigatorio($('#senhal').val())){
            erros.push(1);
        }
        return erros;
   
    
}

function exibirMsgErro(erros){
    if(erros.includes(0)){
        $('.emaill-invalido').show();
    }else{
        $('.emaill-invalido').hide();
    }

    if(erros.includes(1)){
        $('.senhal-invalido').show();
    }else{
        $('.senhal-invalido').hide();
    }

    
}

let i = `<i class="fa fa-user-circle"></i>`;

$(function(){
    $('.botao-login').click(function(e){
        e.preventDefault();
        let erros = validaCadastro();
        if(erros.length > 0){
            exibirMsgErro(erros);
        }else{
            let usuarios = getArrayStorage();
            if(usuarios.length > 0){
                
                usuarios.forEach(function(element, index){
                    
                    if($('#email-login').val() === usuarios[index].login){
                        
                        if($('#senhal').val() === usuarios[index].senha){
                            $('.login').hide();
                            $('.cadastro').hide();
                            $('.loged').show();
                            sessionStorage.setItem('logado',1);
                            location.replace('index.html');
                        }
                    }
                })
            }
            // $('.login-form').submit();
        }
    })
})

function getArrayStorage(){
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

$(function(){
    $('#email-login').change(function(e){

        if(validarEmail($('#email-login').val()) === null){
            $('.emaill-invalido').show();
        }else{
            $('.emaill-invalido').hide();
        }
    })
})

function validarEmail(element){
    const regEmail = /\w{2,}\@\w{2,}/;
    let valid = regEmail.exec(element);
    regEmail.lastIndex = 0;
    return valid;
}