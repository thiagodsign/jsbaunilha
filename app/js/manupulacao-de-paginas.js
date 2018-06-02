var rotas = {
  '/:nomeDaPagina': incluirConteudo,
};

Router(rotas).init(['/bateria-virtual.html']);

function incluirConteudo(nomeDaPagina) {
  $.get('/paginas/' + nomeDaPagina)
      .then(function (conteudo) {
          $('#doc-conteudo-principal').empty().append(conteudo);
      });
}