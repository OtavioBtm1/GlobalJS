export const isAuthenticated = (email, senha) => {
  const users = JSON.parse(sessionStorage.getItem('users')) || [];

  const user = users.find((user) => user.email === email && user.senha === senha);

  if (user) {
    console.log('Usuário encontrado para autenticação:', user.email);
    console.log('Autenticado com sucesso!');
    return user;  
  }
  
  console.log('Credenciais inválidas. Email:', email, 'Senha:', senha);
  return null; 
};
