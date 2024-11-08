function storeUserData(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); 
  }
  
  function getUserData() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return { username, password };
  }
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessageElement = document.getElementById('error-message');
  
    if (username === '' || password === '') {
      errorMessageElement.textContent = 'Por favor, preencha todos os campos!';
      return;
    }
  
    const storedUser = getUserData();
  
    if (storedUser.username === username && storedUser.password === password) {
      errorMessageElement.textContent = '';
      alert('Login bem-sucedido!');
      window.location.href = 'dashboard.html'; 
    } else {
      errorMessageElement.textContent = 'Usuário ou senha inválidos!';
    }
  });
  
  (function initializeDefaultUser() {
    if (!localStorage.getItem('username') && !localStorage.getItem('password')) {
      storeUserData('admin', '12345'); 
    }
  })();
  