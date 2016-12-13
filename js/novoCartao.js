(function(){
    $('.novoCartao').submit(function(event)
    {
        let campoConteudo = $('.novoCartao-conteudo');
        let conteudo = campoConteudo.val().trim().replace(/\n/g, '<br>');

        let arrayConteudoNegrito = conteudo.match(/[**]+.+[**]/g);
        if(arrayConteudoNegrito)
        {
            for (let i=0; i<arrayConteudoNegrito.length;i++)
            {
                console.log(arrayConteudoNegrito[i]);
                conteudo = conteudo.replace(arrayConteudoNegrito[i],arrayConteudoNegrito[i].replace('**', '<b>').replace('**', '</b>'));
            }
        }

        let arrayConteudoItalico = conteudo.match(/[*]+.+[*]/g);
        if(arrayConteudoItalico)
        {
            for (let i=0; i<arrayConteudoItalico.length;i++)
            {
                conteudo = conteudo.replace(arrayConteudoItalico[i],arrayConteudoItalico[i].replace('*', '<i>').replace('*', '</i>'));
            }
        }

        if(conteudo)
        {
            adicionaCartao(conteudo);
        }

        campoConteudo.val('');
        event.preventDefault();
    });
})();