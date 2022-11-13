for (let i = 0; i<= 400; i++) {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `${i} - Teste`;
  document.body.appendChild(newDiv);
}