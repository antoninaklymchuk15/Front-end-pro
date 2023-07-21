const task = document.querySelector('#msgInput');
const btn = document.querySelector('#msgButton');
const ul = document.querySelector('ul');


btn.addEventListener('click', onButtonClick);

function onButtonClick() {
  const msg = task.value;

  if (msg !== '') {
    const li = document.createElement('li');
    li.textContent = msg;
    ul.append(li);
    task.value = '';
  }
}

