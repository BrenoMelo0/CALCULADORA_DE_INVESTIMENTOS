function adicionarItem() {
  const input = document.getElementById('novoItem');
  const valor = input.value.trim();

  if (valor === '') {
    alert('Digite algo antes de adicionar!');
    return;
  }

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const texto = document.createElement('span');
  texto.textContent = valor;

  li.appendChild(checkbox);
  li.appendChild(texto);

  document.getElementById('lista').appendChild(li);

  input.value = '';
  input.focus();
}