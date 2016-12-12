

let $novoCartaoConteudo = document.querySelector('.novoCartao-conteudo');
let $botoes = document.querySelectorAll('.opcoesDoCartao-remove');
let $novoCartao = document.querySelector('.novoCartao');

function removeCartao(){
  let cartao = document.querySelector("#cartao_" + this.getAttribute('data-ref'));

  cartao.classList.add('cartao--some');
  cartao.addEventListener('transitionend',function(){cartao.remove();})
}


for(let index=0 ; index < $botoes.length; index++)
{
  $botoes[index].addEventListener('click', removeCartao);
}

document.querySelector('#mudaLayout').addEventListener('click', function(){
  var $mural = document.querySelector('.mural');
  $mural.classList.toggle('mural--linhas');
  if($mural.classList.contains('mural--linhas')){
    this.textContent = 'Blocos';
  }else {
    this.textContent = 'Linhas';
  }
});


$novoCartaoConteudo.addEventListener('input', function(){
  let $error = document.querySelector('.error');
  if($error)
    $error.remove();
});


$novoCartao.addEventListener('submit', function(){
  event.preventDefault();
  if(this.querySelector('.novoCartao-conteudo').value == '' && !this.querySelector('.error')){
    let $msgError = document.createElement('span');
    $msgError.classList.add('error');
    $msgError.textContent = 'Preencha o campo acima.';

    this.insertBefore($msgError, document.querySelector('.novoCartao-salvar'));
  }
});


function decideTipoCartao(palavra){
  let quebras = palavra.split("<br>").length;
  let totalDeLetras = palavra.replace(/<br>/g, ' ').length;
  let ultimoMaior = "";

  palavra.replace(/<br>/g, ' ').split(' ').forEach(function(){
      if (palavra.length > ultimoMaior.length){
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

$("#busca").on("input", function(){
  let busca = $(this).val().trim();

  if(busca.length){
    $(".cartao").hide().filter(function(){
      return $(this).find(".cartao-conteudo")
                    .text()
                    .match(new RegExp(busca, "i"));
    }).show();
  }else{
    $(".cartao").show();
  }
});


