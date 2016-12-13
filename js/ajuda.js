(function(){
    $("#ajuda").click(function(){
    $.getJSON("http://ceep.herokuapp.com/cartoes/instrucoes",function(res)
        {
            res.instrucoes.forEach(function(instrucao){
                adicionaCartao(instrucao.conteudo, instrucao.cor);
            });
        });
    });
})();