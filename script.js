const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');

addBtn.addEventListener('click', () => {
  const task = input.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${task}</span><button class="deleteBtn">Delete</button>`;
    list.appendChild(li);
    input.value = '';
  }
});

list.addEventListener('click', event => {
  if (event.target.classList.contains('deleteBtn')) {
    event.target.parentElement.remove();
  }
});
