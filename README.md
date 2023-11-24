# MediCare

## Descrição
MediCare é uma plataforma médica que estabelece conexões entre pacientes e médicos. A plataforma oferece acesso a fichas médicas, permite agendar lembretes para a tomada de medicamentos, possibilita esclarecer dúvidas e oferece informações sobre a saúde do usuário.

## Funcionalidades
- **Fichas Médicas:** Acesso fácil às fichas médicas dos pacientes.
- **Agendamento de Medicamentos:** Programação de avisos para lembrar sobre a medicação e seus horários.
- **Tira Dúvidas:** Espaço para esclarecer dúvidas e aprender mais sobre a própria saúde.
- **Login e Registro:** Opção para criar conta, fazer login e logout.

## Tecnologias Utilizadas
- **Vite:** Utilizado para a construção da interface.
- **JSON Server:** Simulação de uma API para os dados.
- **Sass:** Pré-processador de CSS para estilização.
- **React:** Utilizado na estruturação da aplicação.

## Utilização
1. Verificar se existe um cadastro no arquivo `users.json`.
2. Caso não haja um cadastro, criar conta fornecendo nome, email e senha.
3. Realizar o login.
4. Opções disponíveis:
   - **Logout:** Desconectar-se.
   - **Soluções:** Acessar as soluções oferecidas na plataforma.
## Passo a passo para utilizar o MediCare
1. Verificar se está instalado o Node.js
    - Caso não esteja, instalar em https://nodejs.org/
    - Executar o instalador
    - Após a instalação, abra o terminal (Prompt de Comando ou PowerShell) e digite node -v e npm -v para verificar se o Node.js e o gerenciador de pacotes npm foram instalados corretamente.
2. Abrir o terminal (CTRL + ") e digitar npm install
3. Digitar npm run dev
    - Assim vai abrir um localhost onde irá mostrar o codigo funcionando, para acessar apenas colar ou CTRL + CLICK

4. Digitar json-server --watch src/db/users.json
    - Assim irá abrir um localhost capaz de visualizar as informações de cadastro e das contas ativas

## Autores
- Otavio Vitoriano da Silva (RM552012)
- Jéssica Brum Fialho (RM97944)