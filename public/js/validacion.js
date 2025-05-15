document.getElementById('userForm').addEventListener('submit', function(event) {
  let isValid = true;

  // Validate name
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (nameInput.value.trim() === '') {
    nameError.style.display = 'block';
    isValid = false;
  } else {
    nameError.style.display = 'none';
  }

  // Validate age
  const ageInput = document.getElementById('age');
  const ageError = document.getElementById('ageError');
  if (ageInput.value.trim() === '' || parseInt(ageInput.value) <= 0) {
    ageError.style.display = 'block';
    isValid = false;
  } else {
    ageError.style.display = 'none';
  }

  // Prevent form submission if invalid
  if (!isValid) {
    event.preventDefault();
  }
});