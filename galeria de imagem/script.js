// Função que troca a imagem principal da galeria
function trocarImagem(elemento) {
  // Busca no HTML a imagem principal da galeria
  let imagemGrande = document.getElementById("imagemGrande");
  if (!imagemGrande) return;

  // A miniatura usa 150x100 e a imagem grande usa 600/400
  imagemGrande.src = elemento.src.replace("150/100", "600/400");
}