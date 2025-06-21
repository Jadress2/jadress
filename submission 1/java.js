
    function capitalizeWords() {
      const input = document.getElementById('textInput').value;
      const capitalized = input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
      document.getElementById('output').textContent = capitalized;
    }
  