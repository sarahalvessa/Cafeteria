function abrirsearch(){
    let sidebar = document.querySelector(".menu");
    let carrinho = document.querySelector(".carrinho");
    let search = document.querySelector(".search");

    search.style.marginTop == "-130px" || search.style.marginTop == "" ? search.style.marginTop = "0px" : search.style.marginTop = "-130px";

    if(sidebar.style.marginTop == "0px" || sidebar.style.marginTop == "") {
        sidebar.style.marginTop = "-530px";
    }else if(carrinho.style.marginTop == "-450px" || carrinho.style.marginTop == ""){
        carrinho.style.marginTop = "-930px";
    };
};

function openmenu(){
    let sidebar = document.querySelector(".menu");
    let carrinho = document.querySelector(".carrinho");
    let search = document.querySelector(".search");
    
    sidebar.style.marginTop == "-530px" || sidebar.style.marginTop == "" ? sidebar.style.marginTop = "0px" : sidebar.style.marginTop = "-530px";
    if(carrinho.style.marginTop == "-450px" || carrinho.style.marginTop == ""){
        carrinho.style.marginTop = "-930px";
    }else if(search.style.marginTop == "0px" || search.style.marginTop == ""){
        search.style.marginTop = "-130px";
    };
};

function abrircarrinho(){
    let carrinho = document.querySelector(".carrinho");
    let sidebar = document.querySelector(".menu");
    let search = document.querySelector(".search");

    carrinho.style.marginTop == "-930px" || carrinho.style.marginTop == "" ? carrinho.style.marginTop = "-450px" : carrinho.style.marginTop = "-930px";

    if(sidebar.style.marginTop == "0px" || sidebar.style.marginTop == ""){
        sidebar.style.marginTop = "-530px";
    }else if(search.style.marginTop == "0px" || search.style.marginTop == ""){
        search.style.marginTop = "-130px";
    };
};