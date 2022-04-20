//car
let carqtde = getArrayStorage();

//logged
let width = $(window).width();
console.log(width);
const log = sessionStorage.getItem('logado');
const sair = document.querySelector('.sair');
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.badge').innerHTML = carqtde.length;
    if(log === '1'){
        
        document.querySelector('.loged').classList.add('d-flex');
        document.querySelector('.sair').classList.add('d-flex');

        document.querySelector('.login').classList.add('esconder');
        document.querySelector('.cadastro').classList.add('esconder');

        document.querySelector('.bt-signin').classList.add('esconder'); 
          
    }
}, false);

if(sair !== null){
sair.addEventListener('click', function(e){
    e.preventDefault();
    if(log === '1'){

        document.querySelector('.loged').classList.remove('d-flex');
        document.querySelector('.sair').classList.remove('d-flex');

        document.querySelector('.login').classList.remove('esconder');
        document.querySelector('.cadastro').classList.remove('esconder');

        document.querySelector('.bt-signin').classList.remove('esconder'); 

        
        sessionStorage.setItem('logado', 0);
    }
})
}



function getArrayStorage(){
    return JSON.parse(localStorage.getItem('listaProdutos')) || [];
}

//voltar ao index ou permanecer nele se já estiver
const logo = document.querySelector('.logo');
logo.addEventListener('click', function(e){
    e.preventDefault();
    let path = location.pathname;
    if(path.includes('index.html')){
        location.replace('#');
    }else{
        location.replace('index.html');
    }
})

const marcatopo = document.querySelector('.marcatopo');
marcatopo.addEventListener('click', function(e){
    e.preventDefault();
    let path = location.pathname;
    if(path.includes('index.html')){
        location.replace('#');
    }else{
        location.replace('index.html');
    }
})

//mostrar esconder menu categoria
const btCategoria = document.querySelector('#botao-categoria');
var btCategoriaStatus = false;
btCategoria.addEventListener('click', function(e){
    e.preventDefault();
    if(btCategoriaStatus === false){
        btCategoriaStatus = true;
        display();
        e.stopPropagation();
    } else if(btCategoriaStatus===true){
        btCategoriaStatus = false;
        hide();
    }
});

//mostrar esconder menu ferramentas
const btFerramentas = document.querySelector('#bt-ferramentas');
var btFerramentasStatus = false;
btFerramentas.addEventListener('click', function(e){
    e.preventDefault();
    if(btFerramentasStatus === false){
        btFerramentasStatus = true;
        displayF();
        hideH();
        hideM();
        hideT();
        hideS();
        btHardwareStatus = false;
        btMoveisStatus = false;
        btTvStatus = false;
        btSmartphonesStatus = false;
        e.stopPropagation();
    }else if(btFerramentasStatus===true){
        btFerramentasStatus = false;
        hideF();
    }
});

//mostrar esconder menu hardware
const btHardware = document.querySelector('#bt-hardware');
var btHardwareStatus = false;
btHardware.addEventListener('click', function(e){
    e.preventDefault();
    if(btHardwareStatus === false){
        btHardwareStatus = true;
        displayH();
        hideF();

        hideM();
        hideT();
        hideS();
        btFerramentasStatus = false;
        btMoveisStatus = false;
        btTvStatus = false;
        btSmartphonesStatus = false;
        e.stopPropagation();
    }else if(btHardwareStatus===true){
        btHardwareStatus = false;
        hideH();
    }
});

//mostrar esconder menu moveis
const btMoveis = document.querySelector('#bt-moveis');
var btMoveisStatus = false;
btMoveis.addEventListener('click', function(e){
    e.preventDefault();
    if(btMoveisStatus === false){
        btMoveisStatus = true;
        displayM();
        hideF();
        hideH();
        hideT();
        hideS();
        btFerramentasStatus = false;
        btHardwareStatus = false;

        btTvStatus = false;
        btSmartphonesStatus = false;
        e.stopPropagation();
    }else if(btMoveisStatus===true){
        btMoveisStatus = false;
        hideM();
    }
});

//mostrar esconder menu tv video
const btTvVideo = document.querySelector('#bt-tvvideo');
var btTvStatus = false;
btTvVideo.addEventListener('click', function(e){
    e.preventDefault();
    if(btTvStatus === false){
        btTvStatus = true;
        displayT();
        hideF();
        hideH();
        hideM();
        hideS();
        btFerramentasStatus = false;
        btHardwareStatus = false;
        btMoveisStatus = false;
        btSmartphonesStatus = false;
        e.stopPropagation();
    }else if(btTvStatus===true){
        btTvStatus = false;
        hideT();
    }
});

//mostrar esconder menu smartphones
const btSmartphones = document.querySelector('#bt-smartphones');
var btSmartphonesStatus = false;
btSmartphones.addEventListener('click', function(e){
    e.preventDefault();
    if(btSmartphonesStatus === false){
        btSmartphonesStatus = true;
        displayS();
        hideF();
        hideH();
        hideM();
        hideT();
        btFerramentasStatus = false;
        btHardwareStatus = false;
        btMoveisStatus = false;
        btTvStatus = false;
        e.stopPropagation();
    }else if(btSmartphonesStatus===true){
        btSmartphonesStatus = false;
        hideS();
    }
});


const bodyDoc = document.querySelector('#body');
bodyDoc.addEventListener('click', function(e){
    

    hide();
    hideF();
    hideH();
    hideM();
    hideT();
    hideS();
    HideSig();
    btCategoriaStatus = false;
    btFerramentasStatus = false;
    btHardwareStatus = false;
    btMoveisStatus = false;
    btTvStatus = false;
    btSmartphonesStatus = false;
    SigninStatus = false;
});

var display = function(){

    document.querySelector('#dropdown-main').classList.add('d-block');
}

var hide = function(){
    document.querySelector('#dropdown-main').classList.remove('d-block');

}

var displayF = function(){

    document.querySelector('#dropdown-um').classList.add('d-block');
}

var hideF = function(){
    document.querySelector('#dropdown-um').classList.remove('d-block');

}

var displayH = function(){

    document.querySelector('#dropdown-dois').classList.add('d-block');
}

var hideH = function(){
    document.querySelector('#dropdown-dois').classList.remove('d-block');

}

var displayM = function(){

    document.querySelector('#dropdown-tres').classList.add('d-block');
}

var hideM = function(){
    document.querySelector('#dropdown-tres').classList.remove('d-block');

}

var displayT = function(){

    document.querySelector('#dropdown-quatro').classList.add('d-block');
}

var hideT = function(){
    document.querySelector('#dropdown-quatro').classList.remove('d-block');

}

var displayS = function(){

    document.querySelector('#dropdown-cinco').classList.add('d-block');
}

var hideS = function(){
    document.querySelector('#dropdown-cinco').classList.remove('d-block');

}


//mostrar esconder login cadastro
const btSignin = document.querySelector('#signin');
var SigninStatus = false;
btSignin.addEventListener('click', function(e){
    e.preventDefault();

    if(SigninStatus === false){
        SigninStatus = true;
        DisplaySig();
        e.stopPropagation();

    }else if(SigninStatus === true){
        SigninStatus = false;
        HideSig();
    }


});

var HideSig = function(){
    document.querySelector('#login').classList.add('hide');
    document.querySelector('#login').classList.remove('posl');
    document.querySelector('#cadastro').classList.add('hide');
    document.querySelector('#cadastro').classList.remove('posc');

}

var DisplaySig = function(){
    document.querySelector('#login').classList.remove('hide');
    document.querySelector('#login').classList.add('posl');
    document.querySelector('#cadastro').classList.remove('hide');
    document.querySelector('#cadastro').classList.add('posc');

}


//links internos ferramentas
const btBroca = document.querySelector("#brocas");
btBroca.addEventListener('click', function(e){
    location.replace("#");
});

const btFuradeira = document.querySelector("#furadeiras");
btFuradeira.addEventListener('click', function(e){
    location.replace("#");
});

const btMartelo = document.querySelector("#martelos");
btMartelo.addEventListener('click', function(e){
    location.replace("#");
});

const btSerra = document.querySelector("#serras");
btSerra.addEventListener('click', function(e){
    location.replace("#");
});


//links internos hardware
const btFonte = document.querySelector("#fonte");
btFonte.addEventListener('click', function(e){
    location.replace("#");
});

const btMemoria = document.querySelector("#memoria");
btMemoria.addEventListener('click', function(e){
    location.replace("#");
});

const btPlacaMae = document.querySelector("#placamae");
btPlacaMae.addEventListener('click', function(e){
    location.replace("#");
});

const btProcessador = document.querySelector("#processador");
btProcessador.addEventListener('click', function(e){
    location.replace("#");
});

const btSSD = document.querySelector("#ssd");
btSSD.addEventListener('click', function(e){
    location.replace("#");
});

//links internos móveis
const btBanheiro = document.querySelector("#banheiro");
btBanheiro.addEventListener('click', function(e){
    location.replace("#");
});

const btCozinha = document.querySelector("#cozinha");
btCozinha.addEventListener('click', function(e){
    location.replace("#");
});

const btQuarto = document.querySelector("#quarto");
btQuarto.addEventListener('click', function(e){
    location.replace("#");
});

const btSala = document.querySelector("#sala");
btSala.addEventListener('click', function(e){
    location.replace("#");
});

//links internos tv e video
const btTV = document.querySelector("#tv");
btTV.addEventListener('click', function(e){
    location.replace("#");
});

const btAcessorioTV = document.querySelector("#acessoriotv");
btAcessorioTV.addEventListener('click', function(e){
    location.replace("#");
});

const btHomeTheather = document.querySelector("#hometheather");
btHomeTheather.addEventListener('click', function(e){
    location.replace("#");
});

const btProjetor = document.querySelector("#projetor");
btProjetor.addEventListener('click', function(e){
    location.replace("#");
});

//links internos smartphone
const btAsus = document.querySelector("#asus");
btAsus.addEventListener('click', function(e){
    location.replace("#");
});

const btLg = document.querySelector("#lg");
btLg.addEventListener('click', function(e){
    location.replace("#");
});

const btIphone = document.querySelector("#iphone");
btIphone.addEventListener('click', function(e){
    location.replace("#");
});

const btSamsung = document.querySelector("#samsung");
btSamsung.addEventListener('click', function(e){
    location.replace("#");
});


