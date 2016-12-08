
let contador = $('.cartao').length;

$('.novoCartao').submit(function(event){
  let campoConteudo = $('.novoCartao-conteudo');
  let conteudo = campoConteudo.val().trim();



  if(conteudo)
  {

    contador++;

    let botaoRemove = $('<button>').addClass('opcoesDoCartao-remove opcoesDoCartao-opcao')
                                    .attr('data-ref', contador)
                                    .text('Remover')
                                    .click(removeCartao);

      let opcoes = $('<div>').addClass('opcoesDoCartao')
                             .append(botaoRemove);

      let conteudoTag = $('<p>').addClass("cartao-conteudo")
                                .append(conteudo);

      $('<div>').attr('id', 'cartao_' + contador)
                .addClass('cartao')
                .append(opcoes)
               .append(conteudoTag)
               .prependTo('.mural');


  }

  campoConteudo.val('');
  event.preventDefault();

});
