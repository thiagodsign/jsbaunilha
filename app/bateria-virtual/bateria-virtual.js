function tocarPeca(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const bateriaVirtualPeca = document.querySelector(`.bateria-virtual__peca[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    bateriaVirtualPeca.classList.add('bateria-virtual__peca_tocada');
}

function excluirTransicao(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('bateria-virtual__peca_tocada');
}

const bateriaVirtual = document.querySelectorAll('.bateria-virtual__peca');
bateriaVirtual.forEach(bateriaVirtualPeca => bateriaVirtualPeca.addEventListener('transitionend', excluirTransicao)); 

window.addEventListener('keydown', tocarPeca);