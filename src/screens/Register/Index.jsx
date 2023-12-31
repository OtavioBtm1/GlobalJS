import React, { useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import usersData from '../../db/users.json';

export function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleConfirmarSenhaChange = (e) => {
    setConfirmarSenha(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (senha !== confirmarSenha) {
      console.error('As senhas não coincidem.');
      return;
    }
  
    const newUser = {
      name: name,
      email: email,
      senha: senha,
    };
  
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      if (response.ok) {
        console.log('Usuário registrado no servidor com sucesso.');
  
        const usersFromStorage = JSON.parse(sessionStorage.getItem('users')) || [];
        usersFromStorage.push(newUser);
        sessionStorage.setItem('users', JSON.stringify(usersFromStorage));
  
        console.log('Usuário registrado localmente com sucesso.');
  
        navigate('/');
      } else {
        console.error('Erro ao registrar usuário no servidor.');
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
    }
  };

    return (
      <body>
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <h3>Cadastro</h3>
  
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Nome"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
  
          <label htmlFor="username">Email</label>
          <input
            type="text"
            placeholder="Email"
            id="user"
            value={email}
            onChange={handleEmailChange}
          />
  
         

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Senha"
          id="pwd"
          value={senha}
          onChange={handleSenhaChange}
        />

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          placeholder="Confirmar Senha"
          id="confirmPwd"
          value={confirmarSenha}
          onChange={handleConfirmarSenhaChange}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </body>
  );
}

export default Register;
