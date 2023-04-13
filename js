document.addEventListener('DOMContentLoaded', function() {
  const noteArea = document.getElementById('noteArea');
  const saveButton = document.getElementById('saveButton');
  const newButton = document.getElementById('newButton');
  const deleteButton = document.getElementById('deleteButton');

  // Save button click event handler
  saveButton.addEventListener('click', function() {
    localStorage.setItem('note', noteArea.value);
    alert('Note saved successfully!');
  });

  // New button click event handler
  newButton.addEventListener('click', function() {
    noteArea.value = '';
  });

  // Delete button click event handler
  deleteButton.addEventListener('click', function() {
    localStorage.removeItem('note');
    noteArea.value = '';
    alert('Note deleted successfully!');
  });

  // Load saved note from localStorage
  const savedNote = localStorage.getItem('note');
  if (savedNote) {
    noteArea.value = savedNote;
  }
});
