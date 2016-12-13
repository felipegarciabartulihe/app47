(function(){
    let usuario = "felipegarciabartulihe@gmail.com";

    $("#sync").click(function(){
    let cartoes = [];

    $("#sync").removeClass("botaoSync--sincronizado");
    $("#sync").addClass("botaoSync--esperando");

    $(".cartao").each(function(){
        var cartao = {};
        cartao.conteudo = $(this).find(".cartao-conteudo").text();
        cartoes.push(cartao);
    });

    let mural = {
        usuario : usuario,
        cartoes : cartoes
    }

    $.ajax({
        url : "https://ceep.herokuapp.com/cartoes/salvar"
        , method : "POST"
        , data : mural
        , success : function(res){
            $("#sync").addClass("botaoSync--sincronizado");
            console.log(res.quantidade + ' cartões salvos em ' + res.usuario);
        }
        , error : function(){
            $("#sync").addClass("botaoSync--deuRuim");
            console.log("Não foi possível salvar o mural");
        }
        , complete : function(){
            $("#sync").removeClass("botaoSync--esperando");
        }
    });
    });

    $.getJSON(
    "https://ceep.herokuapp.com/cartoes/carregar?callback=?", {usuario:usuario}, function(res){
        let cartoes = res.cartoes;

        console.log(cartoes.length + " carregados em " + res.usuario);
        cartoes.forEach(function(cartao){
            adicionaCartao(cartao.conteudo);
        });
    });
})()