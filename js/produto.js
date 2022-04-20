
$(function(){
    $('.comprar').click(function(e){

        addProdutoArray($('#codigo').html());

        location.replace('carrinho.html');
    })
})

function addProdutoArray(cod){
    let produtos = getArrayStorage();

    let nomeProd = arrayProdDet[cod].nome;
    let descProd = arrayProdDet[cod].descricao;
    let valorProd = arrayProdDet[cod].preco;


    let produto = { 
        nome: nomeProd,
        descricao: descProd,
        valor: valorProd,
        codigo: cod,
        qtde: 1
    };


    if(produtos.length > 0){
        produtos.forEach( function(element, index){
        if(produtos[index].codigo !== cod){
            produtos.push(produto);
            setArrayStorage(produtos);
        }
    });
    }else{
        produtos.push(produto);
        setArrayStorage(produtos);
    }


    
    
}

function setArrayStorage(arr){
    localStorage.setItem('listaProdutos', JSON.stringify(arr));
}

function getArrayStorage(){
    return JSON.parse(localStorage.getItem('listaProdutos')) || [];
}

function setArrayItems(arr){
    localStorage.setItem('items', JSON.stringify(arr));
}




$(function(){
    $('.miniatura1').click(function(e){
        $(".expandida").attr("src","imgs/iphone/iphone1.webp");
    })
})

$(function(){
    $('.miniatura2').click(function(e){
        $(".expandida").attr("src","imgs/iphone/iphone2.webp");
    })
})

$(function(){
    $('.miniatura3').click(function(e){
        $(".expandida").attr("src","imgs/iphone/iphone3.webp");
    })
})

$(function(){
    $('.miniatura4').click(function(e){
        $(".expandida").attr("src","imgs/iphone/iphone4.webp");
    })
})



$(function(){
    $('#cep').mask("99999-999",{placeholder:" "});
})

const regCep = /\d{5}\-\d{3}/;

$(function(){
    $('#cep').change(function(e){

        if(validarCep($('#cep').val()) === null){
            $('.cep-invalido').show();
            }else{
                 $('.cep-invalido').hide();
        }
    })
})

function validarCep(element){
    let valid = regCep.exec(element);
    return valid;
}


var modal = new bootstrap.Modal(document.getElementById('calcularModal'), {
    keyboard: false
})


$(function(){
    $('#calcular').click(function(e){
        e.preventDefault();
        if(validarCep($('#cep').val()) !== null){
            modal.show();
        }

    })
})

var opcaoFrete;



$(function(){
    $('#flexRadioDefault1').click(function(e){
        opcaoFrete = 1;
    })
})

$(function(){
    $('#flexRadioDefault2').click(function(e){
        opcaoFrete = 2;
    })
})



$(function(){
    $('.frete').click(function(e){
        if(opcaoFrete == null){
            opcaoFrete = 2;
        }
        sessionStorage.setItem("opcaoFrete", opcaoFrete);
    })
})