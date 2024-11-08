// Função para armazenar as informações no localStorage
function storeUserData(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); // Normalmente, a senha deveria ser criptografada, mas para este exemplo estamos armazenando como texto simples.
  }
  
  // Função para recuperar as informações do usuário do localStorage
  function getUserData() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return { username, password };
  }
  
  // Função para lidar com o envio do formulário de login
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessageElement = document.getElementById('error-message');
  
    // Validação simples
    if (username === '' || password === '') {
      errorMessageElement.textContent = 'Por favor, preencha todos os campos!';
      return;
    }
  
    // Verificar se os dados já estão armazenados
    const storedUser = getUserData();
  
    if (storedUser.username === username && storedUser.password === password) {
      errorMessageElement.textContent = '';
      alert('Login bem-sucedido!');
      // Redireciona para a página principal (ou pode ser uma outra página de destino)
      window.location.href = 'dashboard.html';  // Exemplo de redirecionamento
    } else {
      // Se os dados não coincidem, mostrar erro
      errorMessageElement.textContent = 'Usuário ou senha inválidos!';
    }
  });
  
  // Função de inicialização para armazenar um usuário inicial (somente para testes)
  (function initializeDefaultUser() {
    if (!localStorage.getItem('username') && !localStorage.getItem('password')) {
      storeUserData('admin', '12345'); // Usuário padrão para testar o login
    }
  })();
  