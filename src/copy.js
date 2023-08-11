const copyButton = document.querySelector('button.copy');
copyButton.addEventListener('click', async () => {
  const texts = document.querySelectorAll('.transcription .content p');
  // Tirando todos os spans para pegar apenas o texto puro
  const output = [...texts].reduce((acc, text) => acc + text.textContent, "");
  // Adicionando texto ao meu clipboard
  try {
    await navigator.clipboard.writeText(output);
    // Mudar ícone
    const icon = copyButton.querySelector('i.ph');
    icon.setAttribute('class', 'ph ph-check-circle');
    // Voltar ao ícone normal depois de 2 segundos
    setTimeout(() => {
      icon.setAttribute('class', 'ph ph-copy-simple');
    }, 2000);
  } catch (error) {
    console.error('Erro ao copiar para a área de transferência:', error);
  }
});
// const copyButton = document.querySelector('button.copy')
// copyButton.addEventListener('click', () => {
//   const texts = document.querySelectorAll('.transcription .content p')
//   //tirando todos os spans para pegar apenas o texto puro
//   const output = [...texts].reduce((acc, text) => acc += text.innerHTML, "")
//   //adicionando texto ao meu clipboard
//   navigator.clipboard.writeText(output.trim())
//   //mudar icone
//   const icon = copyButton.querySelector('i.ph')
//   icon.setAttribute('class', 'ph ph-check-circle')
//   //voltar icone normal depois de 2 seg
//   setTimeout(() => {
//     icon.setAttribute('class', 'ph ph-copy-simple')
//   }, 2000);
// })