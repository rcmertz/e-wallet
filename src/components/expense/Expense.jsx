import "./Expense.css"
import * as React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { Link } from 'react-router-dom'

// var expenses = [
//   { descricao: '1', moeda: 'Dolar', valor: 30, tags: 'Alimento', formaPagamento: 'Pix' },
//   { descricao: '2', moeda: 'Real', valor: 20, tags: 'Vestiário', formaPagamento: 'Dinheiro' },
//   { descricao: '3', moeda: 'Euro', valor: 9000, tags: 'Arsenal', formaPagamento: 'Crédito' },
//   { descricao: '4', moeda: 'Dolar', valor: 30, tags: 'Alimento', formaPagamento: 'Pix' },
//   { descricao: '5', moeda: 'Real', valor: 20, tags: 'Vestiário', formaPagamento: 'Dinheiro' },
//   { descricao: '6', moeda: 'Euro', valor: 9000, tags: 'Arsenal', formaPagamento: 'Crédito' },
//   { descricao: '7', moeda: 'Dolar', valor: 30, tags: 'Alimento', formaPagamento: 'Pix' },
//   { descricao: '8', moeda: 'Real', valor: 20, tags: 'Vestiário', formaPagamento: 'Dinheiro' },
//   { descricao: '9', moeda: 'Euro', valor: 9000, tags: 'Arsenal', formaPagamento: 'Crédito' },
//   { descricao: '10', moeda: 'Dolar', valor: 30, tags: 'Alimento', formaPagamento: 'Pix' },
//   { descricao: '11', moeda: 'Real', valor: 20, tags: 'Vestiário', formaPagamento: 'Dinheiro' },
//   { descricao: '12', moeda: 'Euro', valor: 9000, tags: 'Arsenal', formaPagamento: 'Crédito' }
// ];


export default function Expense() {

  const [expenses, setExpenses] = React.useState([]);

  const handleSubmit = () => {
    debugger;
    const expense = {
      descricao: "",
      moeda: "",
      valor: 0,
      pagamento: "",
      categoria: "",
    }

    expense.moeda = document.getElementById("moeda").value;
    expense.valor = document.getElementById("valor").value;
    expense.descricao = document.getElementById("descricao").value;
    expense.pagamento = document.getElementById("pagamento").value;
    expense.categoria = document.getElementById("categoria").value;

    setExpenses((oldExpenses) => [...oldExpenses, expense]);
  
  }

  return (
    <div className="expense">
      <div className="expense-form-card" id="expense-form-card">
        <div className="expense-form-title">
          <h1>NOVA DESPESA</h1>
          <button>+</button>
        </div>
        <div className="form-group">
          <div className="form-group-1">

            <select id="moeda" name="moeda" className="expense-moeda">
              <option value="real">Real</option>
              <option value="dolar">Dolar</option>
              <option value="euro">Euro</option>
            </select>
            
            <Input id='valor' type='number'>Valor</Input>
            
          </div>


          <div className="form-group-2">
            <Input id='descricao' type='text'>Descriçao</Input>
          </div>

          <div className="form-group-3">

            <select id="pagamento" name="pagamento" className="expense-pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="pix">PIX</option>
              <option value="cartao">Cartao</option>
            </select>
            
             <Input id='categoria' type='text'>Categoria</Input>
            
          </div>

          <div className="form-group-4">
            <Link to="/wallet">
              <Button id='login-button' onClick={handleSubmit}>Cadastrar</Button>
            </Link>
          </div>
    </div>
      </div>

      <div className="expense-list-card">
        <div className="expense-list-title">
          <h1>MINHAS DESPESAS</h1>
        </div>
        <div className="exp-table">
          <div className="exp-table-header">
            <div className="exp-table-title" id="descricao" style={{ width: "40%", marginLeft: "2.5%" }}><p>DESCRIÇÃO</p></div>
            <div className="exp-table-title" id="moeda" style={{ width: "20%" }}><p>MOEDA</p></div>
            <div className="exp-table-title" id="valor" style={{ width: "20%" }}><p>VALOR</p></div>
            <div className="exp-table-title" id="categoria" style={{ width: "30%" }}><p>TAGS</p></div>
            <div className="exp-table-title" id="pagamento" style={{ width: "30%" }}><p>FORMA DE PAGAMENTO</p></div>
          </div>
          <div className="exp-table-body">
            {
              expenses.map((item) => (
                <div className="exp-table-row">
                  <div className="exp-table-cell" id="descricao" style={{ width: "40%", marginLeft: "2.5%" }}><p>{item.descricao}</p></div>
                  <div className="exp-table-cell" id="moeda" style={{ width: "20%" }}><p>{item.moeda}</p></div>
                  <div className="exp-table-cell" id="valor" style={{ width: "20%" }}><p>{item.valor}</p></div>
                  <div className="exp-table-cell" id="categoria" style={{ width: "30%" }}><p>{item.categoria}</p></div>
                  <div className="exp-table-cell" id="pagamento" style={{ width: "30%" }}><p>{item.pagamento}</p></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}