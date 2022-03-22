//selecionando os campos
let titulo = document.querySelector('#titulo');
let descricao = document.querySelector('#descricao');
let link = document.querySelector('#link');





function listaUsuario(event) {
    event.preventDefault();
let usuario = document.querySelector('.usuario');


    let filmescard = document.createElement('div');
    filmescard.classList.add("filmescard");
    usuario.appendChild(filmescard);
 
    let card = document.createElement('h4');
    card.innerText = titulo.value;
   filmescard.appendChild(card);
    
    //document.querySelector('.usuario').appendChild(card);

    let url = document.createElement('img');
    url.setAttribute('src', link.value);
    filmescard.appendChild(url);

    let descricaofilme =  document.createElement('p');
    descricaofilme.innerText = descricao.value;
    filmescard.appendChild(descricaofilme);

    let tipos = document.querySelectorAll('.tipo');
    for (tipo of tipos){
if(tipo.checked) {
    let tipochecked =  document.createElement('p');
    tipochecked.innerText = tipo.value;
    filmescard.appendChild(tipochecked);
}
    }


//checkbox
let indic = document.getElementById('sim');
  indic.checked ? indiccheck = 'Eu indico 👍🏽' : indiccheck = 'Não indico 👎🏽';
  let simindica = document.createElement('p');
  simindica.innerText = indiccheck;
  filmescard.appendChild(simindica);
    
    
    

}

let btn = document.querySelector('#enviarform');

btn.addEventListener('click', listaUsuario);




