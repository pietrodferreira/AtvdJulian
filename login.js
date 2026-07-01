// Validação e manipulação do formulário de login

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  
  // Toggle de visibilidade de senha
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      // Trocar ícone
      const icon = this.querySelector('i');
      if (type === 'password') {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      }
    });
  }
  
  // Prevenir submissão padrão do formulário
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica
    if (!emailInput.value.trim()) {
      setError(emailInput, 'Por favor, digite seu email ou usuário');
      emailInput.focus();
      return;
    }
    
    if (!passwordInput.value.trim()) {
      setError(passwordInput, 'Por favor, digite sua senha');
      passwordInput.focus();
      return;
    }
    
    // Validar formato de email (se contiver @)
    if (emailInput.value.includes('@') && !isValidEmail(emailInput.value)) {
      setError(emailInput, 'Por favor, digite um email válido');
      emailInput.focus();
      return;
    }
    
    // Se passou na validação
    clearError(emailInput);
    clearError(passwordInput);
    console.log('Email/Usuário:', emailInput.value);
    console.log('Senha:', passwordInput.value);
    
    // Simular envio
    alert('Bem-vindo, ' + emailInput.value + '!');
    
    // Aqui você poderia fazer um fetch para um servidor
    // fazerLogin(emailInput.value, passwordInput.value);
  });
  
  // Validação em tempo real para email
  emailInput.addEventListener('input', function() {
    clearError(this);
  });
  
  emailInput.addEventListener('blur', function() {
    if (this.value && this.value.includes('@') && !isValidEmail(this.value)) {
      setError(this, 'Email inválido');
    }
  });
  
  // Validação em tempo real para senha
  passwordInput.addEventListener('input', function() {
    clearError(this);
  });
});

// Função para validar email
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para mostrar erro
function setError(input, message) {
  input.classList.add('input-error');
  input.title = message;
}

// Função para limpar erro
function clearError(input) {
  input.classList.remove('input-error');
  input.title = '';
}

// Exemplo de função para fazer login (comentada)
/*
function fazerLogin(email, senha) {
  fetch('seu-url-do-servidor/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: senha
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.sucesso) {
      // Redirecionar para dashboard
      window.location.href = '/dashboard';
    } else {
      alert('Email ou senha incorretos');
    }
  })
  .catch(error => console.error('Erro:', error));
}
*/
