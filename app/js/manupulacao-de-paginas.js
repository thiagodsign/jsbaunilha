var rotas = {
  '/:nomeDaPagina': incluirConteudo,
};

Router(rotas).init(['/bateria-virtual.html']);

function incluirConteudo(nomeDaPagina) {
  $.get('/jsbaunilha/paginas/' + nomeDaPagina)
  // $.get('/paginas/' + nomeDaPagina)
      .then(function (conteudo) {
          $('#conteudo-principal').empty().append(conteudo);
      });
}