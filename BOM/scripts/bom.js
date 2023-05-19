const chapterInput = document.getElementById('chapterInput');
const addChapterButton = document.getElementById('addChapter');
const chapterList = document.getElementById('chapterList');
addChapterButton.addEventListener('click', function() {
    // Add chapter functionality
  });
  addChapterButton.addEventListener('click', function() {
    const chapterText = chapterInput.value.trim();
  
    if (chapterText !== '') {
      // Add chapter functionality
    }
  });
  addChapterButton.addEventListener('click', function() {
    const chapterText = chapterInput.value.trim();
  
    if (chapterText !== '') {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');
      li.textContent = chapterText;
      deleteButton.textContent = '❌';
      li.appendChild(deleteButton);
      chapterList.appendChild(li);
  
      deleteButton.addEventListener('click', function() {
        chapterList.removeChild(li);
      });
  
      chapterInput.focus();
      chapterInput.value = '';
    }
  });
  