//(function(){
    let contador = $('.cartao').length;
    let $novoCartaoConteudo = document.querySelector('.novoCartao-conteudo');
    let $botoes = document.querySelectorAll('.opcoesDoCartao-remove');
    let $novoCartao = document.querySelector('.novoCartao');

    function decideTipoCartao(palavra)
    {
        let quebras = palavra.split("<br>").length;
        let totalDeLetras = palavra.replace(/<br>/g, ' ').length;
        let ultimoMaior = "";

        palavra.replace(/<br>/g, ' ').split(' ').forEach(function()
            {
                if (palavra.length > ultimoMaior.length)
                {
                    ultimoMaior = palavra;
                }
            }
        );

        let tamMaior = ultimoMaior.length;
        let tipoCartao = "cartao--textoPequeno";

        if(tamMaior < 9 && quebras < 5 && totalDeLetras < 55){
            tipoCartao = "cartao--textoGrande";
        }else if (tamMaior < 12 && quebras < 6 && totalDeLetras < 75){
            tipoCartao = "cartao--textoMedio";
        }

        return tipoCartao;
    }


    function adicionaCartao(conteudo, cor)
    {
        contador++;

        let botaoRemove = $('<button>').addClass('opcoesDoCartao-remove opcoesDoCartao-opcao')
                                        .attr('data-ref', contador)
                                        .text('Remover')
                                        .click(removeCartao);

        let opcoes = $('<div>').addClass('opcoesDoCartao').append(botaoRemove);
        let tipoCartao = decideTipoCartao(conteudo);
        let conteudoTag = $('<p>').addClass("cartao-conteudo").append(conteudo);

        $('<div>').attr('id', 'cartao_' + contador)
                    .addClass('cartao')
                    .addClass(tipoCartao)
                    .css('background-color',cor)
                    .append(opcoes)
                    .append(conteudoTag)
                    .prependTo('.mural');
        
        $("#busca").trigger('input');
    }


    function removeCartao()
    {
        let cartao = document.querySelector("#cartao_" + this.getAttribute('data-ref'));
        cartao.classList.add('cartao--some');
        cartao.addEventListener('transitionend',function(){cartao.remove();})
    }
                                                                        
    for(let index=0 ; index < $botoes.length; index++)
    {
        $botoes[index].addEventListener('click', removeCartao);
    }

    $novoCartaoConteudo.addEventListener('input', function()
    {
        let $error = document.querySelector('.error');
        if($error)
            $error.remove();
    });

    $novoCartao.addEventListener('submit', function()
    {
        event.preventDefault();
        if(this.querySelector('.novoCartao-conteudo').value == '' && !this.querySelector('.error'))
        {
            let $msgError = document.createElement('span');
            $msgError.classList.add('error');
            $msgError.textContent = 'Preencha o campo acima.';

            this.insertBefore($msgError, document.querySelector('.novoCartao-salvar'));
        }
    });
//})();