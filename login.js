// Validação e manipulação do formulário de login

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  // Prevenir submissão padrão do formulário
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica
    if (!emailInput.value.trim()) {
      alert('Por favor, digite seu email ou usuário');
      emailInput.focus();
      return;
    }
    
    if (!passwordInput.value.trim()) {
      alert('Por favor, digite sua senha');
      passwordInput.focus();
      return;
    }
    
    // Validar formato de email
    if (emailInput.type === 'email' && !isValidEmail(emailInput.value)) {
      alert('Por favor, digite um email válido');
      emailInput.focus();
      return;
    }
    
    // Se passou na validação
    console.log('Email/Usuário:', emailInput.value);
    console.log('Senha:', passwordInput.value);
    
    // Simular envio
    alert('Bem-vindo, ' + emailInput.value + '!');
    
    // Aqui você poderia fazer um fetch para um servidor
    // fazerLogin(emailInput.value, passwordInput.value);
  });
  
  // Validação em tempo real
  emailInput.addEventListener('blur', function() {
    if (this.value && this.type === 'email' && !isValidEmail(this.value)) {
      this.style.borderColor = '#ff6b6b';
    } else {
      this.style.borderColor = 'transparent';
    }
  });
  
  passwordInput.addEventListener('focus', function() {
    this.style.borderColor = 'transparent';
  });
});

// Função para validar email
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
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
