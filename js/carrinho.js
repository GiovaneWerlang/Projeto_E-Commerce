

let frete = 0;

if(localStorage.getItem("listaProdutos") != null){
    
    let produtos = getArrayStorage();
    produtos.forEach(function(item, index){
        
        $('.lista-carrinho').append(novoDivj(item.codigo));

    })
    util();
    calcular();
    carregar();
}




function novoDivj(codigo){
    let div = `
    <div class="item-carrinho">

        <div class="imagens-carrinho">
            <img src="${arrayProdDet[codigo].img}" alt="" class="imagem-item-carrinho">
        </div>

        <div class="descricao-resumida">
            <h4 class="marca-resumida">${arrayProdDet[codigo].nome}</h4>
            <p class="desc-carrinho">${arrayProdDet[codigo].descricao}</p>
            <p class="preco-carrinho">${arrayProdDet[codigo].preco}</p>
            <p class="cods">${codigo}</p>
        </div>

        <div class="qtde">
            <a href="#" onclick="somarProduto(event, this, ${codigo})" class="somar"><i class="fa fa-plus"></i></a>
            <input type="text" class="qtde-num" value="1">
            <a href="#" onclick="subtrairProduto(event, this)" class="subtrair"><i class="fa fa-minus"></i></a>
            <a href="#" onclick="excluirProduto(event, this)" class="excluir"><i class="fa fa-trash"></i></a>
        </div>
        
    </div>
    `

    return div;
}

function carregar(){
    let lista = [];
    $('.item-carrinho').each(function(){
        let produto = {
                nome: $('.marca-resumida').text(),
                descricao: $('.desc-carrinho').text(),
                valor: $('.preco-carrinho').text(),
                codigo: $('.cods').text(),
                qtde: $('.qtde-num').val()
        };
        lista.push(produto);
    })
    setArrayStorage(lista);

}

function calcular(){
    let subtotal = 0;
    let frete;
    let descontos = 0;
    let total = 0;
    $('.item-carrinho').each(function(){

        subtotal += Number($('.preco-carrinho').text()) * Number($('.qtde-num').val());
    })
    $('.subtotal-valor').html(subtotal);
    frete = Number($('.frete-valor').html());
    $('.descontos-valor').html(descontos);
    total = subtotal + frete - descontos;
    $('.valorTotal-valor').html(total);
    let parc = (total/12).toFixed(2);
    $('.parc').html("Em até 12x de R$" + parc + " sem juros");

}
//mudar quantidade no array
function somar(num1, num2){
    return Number(num1) + Number(num2);
}

function subtrair(num1, num2){
    return Number(num1) - Number(num2);
}

function subtrairProduto(e, element){
    e.preventDefault();
    let qtde = $(element).parents('.qtde').children('.qtde-num');
    if(qtde.val() > 1){
        qtde.val(subtrair(qtde.val(),1));
    }
    let produtos = getArrayStorage();
    produtos.forEach(function(item, index){
        produtos[index].qtde = qtde.val();
    })
    setArrayStorage(produtos);
    calcular();
}

function somarProduto(e, element, cod){
    e.preventDefault();
    let qtde = $(element).parents('.qtde').children('.qtde-num');

    qtde.val(somar(qtde.val(),1));
    let produtos = getArrayStorage();
    produtos.forEach(function(item, index){
        produtos[index].qtde = qtde.val();
    })
    setArrayStorage(produtos);
    calcular();
}

function excluirProduto(e, element){
    e.preventDefault();
    let div = $(element).parents('.item-carrinho');
    $(div).remove();
    calcular();
    util();
    carregar();
    let carqtde = getArrayStorage();
    $('.badge').html(carqtde.length);
}

$(function(){
    $('#flexRadioDefault1').click(function(e){
        frete = 23.99;
        $('.frete-valor').html(frete);
        
    })
})

$(function(){
    $('#flexRadioDefault2').click(function(e){
       frete = 49.99;
       $('.frete-valor').html(frete);
       
    })
})

$(function(){
    $('.frete').click(function(e){

       if($('.frete-valor').text() === '0'){
           frete = 49.99;
           $('.frete-valor').html(frete);
           
       }
       calcular();
    })
})

$(function(){
    $('.continuar').click(function(e){
        let listaProd = getArrayStorage();
        if($('.frete-valor').text() === '0'){
            $('#calcularModal').modal('show');
            
        }
        let frete = $('.frete-valor').text();

        let total = $('.valorTotal-valor').text();
        let ped = [{listaProd, frete, total}];

        localStorage.setItem('carrinho', JSON.stringify(ped));
    })
})


$(function(){
    $('.escolher').click(function(e){
        location.replace('index.html');
    })
})



function getArrayStorage(){
    return JSON.parse(localStorage.getItem('listaProdutos')) || [];
}


function setArrayStorage(arr){
    localStorage.setItem('listaProdutos', JSON.stringify(arr));
}

function util(){
    if($(".lista-carrinho .item-carrinho").length > 0){
        $('.items-carrinho').show();
        $('.resumo').show();
        $('.vazio').hide();
    }else{
        $('.items-carrinho').hide();
        $('.resumo').hide();
        $('.vazio').show();
    }
}