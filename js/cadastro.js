$(function(){
    $('#cpf').mask("999.999.999-99",{placeholder:" "},{autoclear: false});
    $('#telefone').mask("(99)99999-9999",{placeholder:" "});
    $('#cep').mask("99999-999",{placeholder:" "});
    $('#cnpj').mask("99.999.999/9999-99",{placeholder:" "});
    $('#insc-estadual').mask("999.999.999",{placeholder:" "});
    $('#telefonej').mask("(99)99999-9999",{placeholder:" "});
    $('#cepj').mask("99999-999",{placeholder:" "});
})


function validarCampoObrigatorio(campo){
    if(campo != ''){
        return true;
    }
    return false;
}

function validarCampo(element, reg){
    let valid = reg.exec(element);
    return valid;
}

function escondeInvalido(element){
    $(element).css("display", "none");
}

function mostraInvalido(element){
    $(element).css("display", "block");
}

function validaCadastro(tipo){
    if(tipo === 'fisica'){
        let erros = [];

        if(!validarCampoObrigatorio($('#apelido').val())){
            erros.push(0);
        }
        if(!validarCampoObrigatorio($('#nome').val())){
            erros.push(1);
        }
        if(!validarCampoObrigatorio($('#cpf').val()) || validarCpf($('#cpf').val()) === null){
            erros.push(2);
        }
        if(!validarCampoObrigatorio($('#datanasc').val())){
            erros.push(3);
        }
        if($('#genero').val() === "Selecione"){
            erros.push(4);
        }
        if(!validarCampoObrigatorio($('#telefone').val())){
            erros.push(5);
        }
        if(!validarCampoObrigatorio($('#email').val())){
            erros.push(6);
        }
        if(!validarCampoObrigatorio($('#senha').val())){
            erros.push(7);
        }
        if(!validarCampoObrigatorio($('#csenha').val())){
            erros.push(8);
        }
        if(!validarCampoObrigatorio($('#rua').val())){
            erros.push(9);
        }
        if(!validarCampoObrigatorio($('#numero').val())){
            erros.push(10);
        }
        if(!validarCampoObrigatorio($('#bairro').val())){
            erros.push(11);
        }
        if(!validarCampoObrigatorio($('#cidade').val())){
            erros.push(12);
        }
        if(!validarCampoObrigatorio($('#estado').val())){
            erros.push(13);
        }
        if(!validarCampoObrigatorio($('#cep').val())){
            erros.push(14);
        }

        return erros;
    }else{
        let erros = [];
        if(!validarCampoObrigatorio($('#cnpj').val())){
            erros.push(0);
        }
        if(!validarCampoObrigatorio($('#razaosocial').val())){
            erros.push(1);
        }
        if(!validarCampoObrigatorio($('#insc-estadual').val())){
            erros.push(2);
        }
        if(!validarCampoObrigatorio($('#telefonej').val())){
            erros.push(3);
        }
        if(!validarCampoObrigatorio($('#emailj').val())){
            erros.push(4);
        }
        if(!validarCampoObrigatorio($('#senhaj').val())){
            erros.push(5);
        }
        if(!validarCampoObrigatorio($('#csenhaj').val())){
            erros.push(6);
        }
        if(!validarCampoObrigatorio($('#ruaj').val())){
            erros.push(7);
        }
        if(!validarCampoObrigatorio($('#numeroj').val())){
            erros.push(8);
        }
        if(!validarCampoObrigatorio($('#bairroj').val())){
            erros.push(9);
        }
        if(!validarCampoObrigatorio($('#cidadej').val())){
            erros.push(10);
        }
        if(!validarCampoObrigatorio($('#estadoj').val())){
            erros.push(11);
        }
        if(!validarCampoObrigatorio($('#cepj').val())){
            erros.push(12);
        }

        return erros;
    }
}

function exibirMsgErroF(erros){
    if(erros.includes(0)){
        // mostraInvalido('.apelido-invalido');
        $('.apelido-invalido').show();
    }else{
        $('.apelido-invalido').hide();
    }

    if(erros.includes(1)){
        $('.nome-invalido').show();
    }else{
        $('.nome-invalido').hide();
    }

    if(erros.includes(2)){
        $('.cpf-invalido').show();
    }else{
        $('.cpf-invalido').hide();
    }

    if(erros.includes(3)){
        $('.data-invalida').show();
    }else{
        $('.data-invalida').hide();
    }

    if(erros.includes(4)){
        $('.genero-invalido').show();
    }else{
        $('.genero-invalido').hide();
    }

    if(erros.includes(5)){
        $('.telefone-invalido').show();
    }else{
        $('.telefone-invalido').hide();
    }

    if(erros.includes(6)){
        $('.email-invalido').show();
    }else{
        $('.email-invalido').hide();
    }

    if(erros.includes(7)){
        $('.senha-invalida').show();
    }else{
        $('.senha-invalida').hide();
    }

    if(erros.includes(8)){
        $('.confirma-invalida').show();
    }else{
        $('.confirma-invalida').hide();
    }

    if(erros.includes(9)){
        $('.rua-invalida').show();
    }else{
        $('.rua-invalida').hide();
    }

    if(erros.includes(10)){
        $('.numero-invalido').show();
    }else{
        $('.numero-invalido').hide();
    }

    if(erros.includes(11)){
        $('.bairro-invalido').show();
    }else{
        $('.bairro-invalido').hide();
    }

    if(erros.includes(12)){
        $('.cidade-invalida').show();
    }else{
        $('.cidade-invalida').hide();
    }

    if(erros.includes(13)){
        $('.estado-invalido').show();
    }else{
        $('.estado-invalido').hide();
    }

    if(erros.includes(14)){
        $('.cep-invalido').show();
    }else{
        $('.cep-invalido').hide();
    }
    
}

function exibirMsgErroJ(erros){
    if(erros.includes(0)){
        $('.cnpj-invalido').show();
    }else{
        $('.cnpj-invalido').hide();
    }

    if(erros.includes(1)){
        $('.razao-invalida').show();
    }else{
        $('.razao-invalida').hide();
    }

    if(erros.includes(2)){
        $('.inscricao-invalida').show();
    }else{
        $('.inscricao-invalida').hide();
    }

    if(erros.includes(3)){
        $('.telefonej-invalido').show();
    }else{
        $('.telefonej-invalido').hide();
    }

    if(erros.includes(4)){
        $('.emailj-invalido').show();
    }else{
        $('.emailj-invalido').hide();
    }

    if(erros.includes(5)){
        $('.senhaj-invalida').show();
    }else{
        $('.senhaj-invalida').hide();
    }

    if(erros.includes(6)){
        $('.confirmaj-invalida').show();
    }else{
        $('.confirmaj-invalida').hide();
    }

    if(erros.includes(7)){
        $('.ruaj-invalida').show();
    }else{
        $('.ruaj-invalida').hide();
    }

    if(erros.includes(8)){
        $('.numeroj-invalido').show();
    }else{
        $('.numeroj-invalido').hide();
    }

    if(erros.includes(9)){
        $('.bairroj-invalido').show();
    }else{
        $('.bairroj-invalido').hide();
    }

    if(erros.includes(10)){
        $('.cidadej-invalida').show();
    }else{
        $('.cidadej-invalida').hide();
    }

    if(erros.includes(11)){
        $('.estadoj-invalido').show();
    }else{
        $('.estadoj-invalido').hide();
    }

    if(erros.includes(12)){
        $('.cepj-invalido').show();
    }else{
        $('.cepj-invalido').hide();
    }
    
}

$(function(){
    $('.botao-fisica').click(function(e){
        e.preventDefault();
        let erros = validaCadastro('fisica');
        if(erros.length > 0){
            exibirMsgErroF(erros);
        }else{
            let usuarios = getArrayStorage();
            let usuario = {
                login: $('#email').val() ,
                senha: $('#senha').val()
            }
            usuarios.push(usuario);
            setArrayStorage(usuarios);
            $('.cadastro-fisica').submit();
        }
    })
})

$(function(){
    $('.botao-juridica').click(function(e){
        e.preventDefault();
        let erros = validaCadastro('juridica');
        if(erros.length > 0){
            exibirMsgErroJ(erros);
        }else{
            $('.cadastro-juridica').submit();
        }
    })
})

function setArrayStorage(arr){
    localStorage.setItem('usuarios', JSON.stringify(arr));
}

function getArrayStorage(){
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}









//validar cpf
const regCpf = /\d{3}\.\d{3}\.\d{3}\-\d{2}/;


$(function(){
    $('#cpf').change(function(e){

                if(validarCpf($('#cpf').val()) === null){
                    $('.cpf-invalido').show();
                }else{
                    $('.cpf-invalido').hide();
                }

     })
})

function validarCpf(element){
    let valid = regCpf.exec(element);
    return valid;
}

//validar cnpj
const regCnpj = /\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}/;

$(function(){
    $('#cnpj').change(function(e){

        var cnpj = $('#cnpj').val().match(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/);
        if(cnpj !== null ){
            if(cnpj.input > 14){
                $('.cnpj-invalido').show();
            }
            if(cnpj[0] == $('#cnpj').val()){
                cnpj = cnpj[1] + "." + cnpj[2] + "." + cnpj[3] + "/" + cnpj[4] + "-" + cnpj[5];
            $('#cnpj').val(cnpj);;
                if(validarCnpj($('#cnpj').val()) === null){
                    $('.cnpj-invalido').show();
                }else{
                    $('.cnpj-invalido').hide();
                }
            }
        }
        if(cnpj === null){
            if($('#cnpj').val() !== null){
                let c = $('#cnpj').val();

                 if(c.length !== 18){

                     $('.cnpj-invalido').show();
                }else{

                    $('.cnpj-invalido').hide();
                }
            }
        }
    })
})

function validarCnpj(element){
    let valid = regCnpj.exec(element);
    return valid;
}

//validar inscrição estadual
const regInsc = /\d{3}\.\d{3}\.\d{3}/;


$(function(){
    $('#insc-estadual').change(function(e){

        var insc = $('#insc-estadual').val().match(/(\d{3})(\d{3})(\d{3})/);
        if(insc !== null ){
            if(insc.input > 9){
                $('.inscricao-invalida').show();
            }
            if(insc[0] == $('#insc-estadual').val()){
                insc = insc[1] + "." + insc[2] + "." + insc[3];
                $('#insc-estadual').val(insc);

                if(validarInsc($('#insc-estadual').val()) === null){
                    $('.inscricao-invalida').show();
                }else{
                    $('.inscricao-invalida').hide();
                }
            }
        }
        if(insc === null){
            if($('#insc-estadual').val() !== null){
                let i = $('#insc-estadual').val();

                 if(i.length !== 11){

                     $('.inscricao-invalida').show();
                }else{

                    $('.inscricao-invalida').hide();
                }
            }
        }
    })
})

function validarInsc(element){
    let valid = regInsc.exec(element);
    return valid;
}

//validar email fisica
const regEmail = /\w{2,}\@\w{2,}\.\w{2,}/;


$(function(){
    $('#email').change(function(e){

        if(validarCampo($('#email').val(), regEmail) === null){
            $('.email-invalido').show();
        }else{
            $('.email-invalido').hide();
        }
    })
})



function validarEmail(element){
    let valid = regEmail.exec(element);
    regEmail.lastIndex = 0;
    return valid;
}

// validar email juridica
$(function(){
    $('#emailj').change(function(e){

        if(validarCampo($('#emailj').val(), regEmail) === null){
            $('.emailj-invalido').show();
        }else{
            $('.emailj-invalido').hide();
        }
    })
})


//validar telefone fisica
const regTel = /\(\d{2}\)\d{4,5}\-\d{4}/;

$(function(){
    $('#telefone').change(function(e){

        var tel = $('#telefone').val().match(/(\d{2})(\d{4,5})(\d{4})/);
        if(tel !== null ){
            if(tel.input>11){
                $('.telefone-invalido').show();
            }
            if(tel[0] == $('#telefone').val()){
            tel = "(" + tel[1] + ")" + tel[2] + "-" + tel[3];
            $('#telefone').val(tel);
                if(validarTel($('#telefone').val()) === null){
                    $('.telefone-invalido').show();
                }else{
                    $('.telefone-invalido').hide();
                }
            }
        }
        if(tel === null){
            if($('#telefone').val() !== null){
                let t = $('#telefone').val();


                if(validarTel($('#telefone').val()) === null){
                    $('.telefone-invalido').show();
                }else if(t.length < 13 || t.length > 14){
                    $('.telefone-invalido').show();
                }else{
                    let t2 = validarTel(t);

                    t = t2[0];
                    $('#telefone').val(t);
                    $('.telefone-invalido').hide();
                }
            }
        }
    })
})

function validarTel(element){
    let valid = regTel.exec(element);
    return valid;
}

//validar telefone juridica
$(function(){
    $('#telefonej').change(function(e){

        var tel = $('#telefonej').val().match(/(\d{2})(\d{4,5})(\d{4})/);
        if(tel !== null ){
            if(tel.input>11){
                $('.telefonej-invalido').show();
            }
            if(tel[0] == $('#telefonej').val()){
            tel = "(" + tel[1] + ")" + tel[2] + "-" + tel[3];
            $('#telefonej').val(tel);
                if(validarTel($('#telefonej').val()) === null){
                    $('.telefonej-invalido').show();
                }else{
                    $('.telefonej-invalido').hide();
                }
            }
        }
        if(tel === null){
            if($('#telefonej').val() !== null){
                let t = $('#telefonej').val();


                if(validarTel($('#telefonej').val()) === null){
                    $('.telefonej-invalido').show();
                }else if(t.length < 13 || t.length > 14){
                    $('.telefonej-invalido').show();
                }else{
                    let t2 = validarTel(t);

                    t = t2[0];
                    $('#telefonej').val(t);
                    $('.telefonej-invalido').hide();
                }
            }
        }
    })
})

//validar senha fisica


$(function(){
    $('#csenha').change(function(e){

        if($('#csenha').val() !== $('#senha').val()){
            $('.confirma-invalida').show();
        }else{
            $('.confirma-invalida').hide();
        }
    })
})

//validar senha juridica
$(function(){
    $('#csenhaj').change(function(e){

        if($('#csenhaj').val() !== $('#senhaj').val()){
            $('.confirmaj-invalida').show();
        }else{
            $('.confirmaj-invalida').hide();
        }
    })
})


//validar Cep

const regCep = /\d{5}\-\d{3}/;


//fisica
$(function(){
    $('#cep').change(function(e){

        var cep = $('#cep').val().match(/(\d{5})(\d{3})/);
        if(cep !== null ){
            if(cep.input > 8){
                $('.cep-invalido').show();
            }
            if(cep[0] == $('#cep').val()){
                cep = cep[1] + "-" + cep[2];
                $('#cep').val(cep);

                if(validarCep($('#cep').val()) === null){
                    $('.cep-invalido').show();
                }else{
                    $('.cep-invalido').hide();
                }
            }
        }
        if(cep === null){
            if($('#cep').val() !== null){
                let t = $('#cep').val();


                if(validarCep($('#cep').val()) === null){
                    $('.cep-invalido').show();
                }else if(t.length != 9){
                    $('.cep-invalido').show();
                }else{
                    let t2 = validarCep(t);

                    t = t2[0];
                    $('#cep').val(t);
                    $('.cep-invalido').hide();
                }
            }
        }
    })
})

function validarCep(element){
    let valid = regCep.exec(element);
    return valid;
}


//juridica cep

$(function(){
    $('#cepj').change(function(e){

        var cep = $('#cepj').val().match(/(\d{5})(\d{3})/);
        if(cep !== null ){
            if(cep.input > 8){
                $('.cepj-invalido').show();
            }
            if(cep[0] == $('#cepj').val()){
                cep = cep[1] + "-" + cep[2];
                $('#cepj').val(cep);

                if(validarCep($('#cepj').val()) === null){
                    $('.cepj-invalido').show();
                }else{
                    $('.cepj-invalido').hide();
                }
            }
        }
        if(cep === null){
            if($('#cepj').val() !== null){
                let t = $('#cepj').val();


                if(validarCep($('#cepj').val()) === null){
                    $('.cepj-invalido').show();
                }else if(t.length != 9){
                    $('.cepj-invalido').show();
                }else{
                    let t2 = validarCep(t);

                    t = t2[0];
                    $('#cepj').val(t);
                    $('.cepj-invalido').hide();
                }
            }
        }
    })
})

//validar palavras
const regPalavra = /[a-zA-Z]/;

function validarPalavra(element){
    let valid = regPalavra.exec(element);
    return valid;
}

//apelido
$(function(){
    $('#apelido').change(function(e){

        if(validarCampo($('#apelido').val(), regPalavra) === null){
            $('.apelido-invalido').show();
        }else{
            $('.apelido-invalido').hide();
        }
    })
})

//razao social
$(function(){
    $('#razaosocial').change(function(e){

        if(validarCampo($('#razaosocial').val(), regPalavra) === null){
            $('.razao-invalida').show();
        }else{
            $('.razao-invalida').hide();
        }
    })
})

//nome
$(function(){
    $('#nome').change(function(e){

        if(validarCampo($('#nome').val(), regPalavra) === null){
            $('.nome-invalido').show();
        }else{
            $('.nome-invalido').hide();
        }
    })
})

//rua fisica
$(function(){
    $('#rua').change(function(e){

        if(validarCampo($('#rua').val(), regPalavra) === null){
            $('.rua-invalida').show();
        }else{
            $('.rua-invalida').hide();
        }
    })
})

//rua juridica
$(function(){
    $('#ruaj').change(function(e){

        if(validarCampo($('#ruaj').val(), regPalavra) === null){
            $('.ruaj-invalida').show();
        }else{
            $('.ruaj-invalida').hide();
        }
    })
})


//bairro fisica
$(function(){
    $('#bairro').change(function(e){

        if(validarCampo($('#bairro').val(), regPalavra) === null){
            $('.bairro-invalido').show();
        }else{
            $('.bairro-invalido').hide();
        }
    })
})

//bairro juridica
$(function(){
    $('#bairroj').change(function(e){

        if(validarCampo($('#bairroj').val(), regPalavra) === null){
            $('.bairroj-invalido').show();
        }else{
            $('.bairroj-invalido').hide();
        }
    })
})

//cidade fisica
$(function(){
    $('#cidade').change(function(e){

        if(validarCampo($('#cidade').val(), regPalavra) === null){
            $('.cidade-invalida').show();
        }else{
            $('.cidade-invalida').hide();
        }
    })
})

//cidade juridica
$(function(){
    $('#cidadej').change(function(e){

        if(validarCampo($('#cidadej').val(), regPalavra) === null){
            $('.cidadej-invalida').show();
        }else{
            $('.cidadej-invalida').hide();
        }
    })
})

//estado fisica
$(function(){
    $('#estado').change(function(e){

        if(validarCampo($('#estado').val(), regPalavra) === null){
            $('.estado-invalido').show();
        }else{
            $('.estado-invalido').hide();
        }
    })
})

//estado juridica
$(function(){
    $('#estadoj').change(function(e){

        if(validarCampo($('#estadoj').val(), regPalavra) === null){
            $('.estadoj-invalido').show();
        }else{
            $('.estadoj-invalido').hide();
        }
    })
})

//validar numeros

const regNum = /\d/;

function validarNum(element){
    let valid = regNum.exec(element);
    return valid;
}

//numero fisica
$(function(){
    $('#numero').change(function(e){

        if(validarCampo($('#numero').val(), regNum) === null){
            $('.numero-invalido').show();
        }else{
            $('.numero-invalido').hide();
        }
    })
})

//numero juridica
$(function(){
    $('#numeroj').change(function(e){

        if(validarCampo($('#numeroj').val(), regNum) === null){
            $('.numeroj-invalido').show();
        }else{
            $('.numeroj-invalido').hide();
        }
    })
})