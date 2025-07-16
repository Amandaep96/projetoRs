function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  //OU
  html.classList.toggle("light")

  // pegar a tag img e substituir a imagem

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode adicionar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // pegar a tag alt e substituir o texto
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de Mayk Brito com fundo azul")
  } else {
    img.setAttribute("alt", "Foto de Mayk Brito com fundo amarelo")
  }
}
