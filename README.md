<h1> E-wallet </h1>

<p align="center">Sistema de Carteira Digital</p> 

<h1 align="center"></h1>

### 1. Histórico de revisões

| DATA | VERSÃO | DESCRIÇÃO|
| -------------------- | ------------------- | ---------------------------|
| 17/11/2022 | 1.0 | Pages          |
| 22/11/2022 | 1.1 | Api            |
| 23/11/2022 | 1.2 | Tests          |
| 29/11/2022 | 1.3 | Docker         |
| 12/12/2022 | 1.4 | Documentation  |
| 13/12/2022 | 1.5 | Redux          |

### 2. Introdução </p>
<p>O projeto carteira digital foi realizado tendo como objetivo principal a gestão de suas despesas, de modo a facilitar o dia a dia econômico do usuário. O mesmo abrange cadastro de moedas, conversão e consultas em históricos de despesas ou lucros.
</p>


### 3. Visão Geral 
![visao-geral-da-arquitetura](https://www.figma.com/file/aqDrRxgD4fSfcwempNG85t/CARTEIRA-DIGITAL?node-id=0%3A1&t=6dgH5pIgrDJ8rYHX-1)

### 4. Mecanismos arquiteturais 

| MECANISMOS DE ANÁLISE | MECANISMOS DE DESIGN | MECANISMOS DE IMPLEMENTAÇÃO|
| -------------------- | ------------------- | ---------------------------|
| Camada de Estado | Gerencia os estados da aplicação  | Redux |
| Camada de Integração | Consumo de api  | Feach |

### Pré-requisitos
<p>Antes de começar, você vai precisar ter instalado em sua máquina a seguinte ferramenta:</p>
<p>Nodejs 16 lts</p>

### Rodando o Projeto

```bash
# Clone este repositório
$ https://github.com/rcmertz/e-wallet.git

# Acesse a pasta do projeto no terminal/cmd
$ cd e-wallet

# Instale as dependências
$ npm install 

# Instale o redux
$ npx install 

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Compilar a aplicação para produção
$ npm run build

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
