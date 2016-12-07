

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
