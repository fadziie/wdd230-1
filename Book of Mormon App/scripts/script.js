document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('favchap');
    const addButton = document.getElementById('addBtn');
    const list = document.getElementById('list');
  
    addButton.addEventListener('click', function() {
      const chapterText = input.value.trim();
  
      if (chapterText !== '') {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
  
        listItem.textContent = chapterText;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
  
        deleteButton.addEventListener('click', function() {
          listItem.remove();
          input.focus();
        });
  
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
  
        input.value = '';
        input.focus();
      }
    });
  });
  