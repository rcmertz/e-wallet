import "./Expense.css";
import * as React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addExpense } from '../../reducers/expenseSlice.js'

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

  const dispatch = useDispatch();

  const expense = {
    descricao: "",
    moeda: "",
    valor: 0,
    pagamento: "",
    categoria: "",
  };

  const [form, setForm] = React.useState({
    moeda: {
      hasChanged: false,
      value: "",
    },
    valor: {
      hasChanged: false,
      value: "",
    },
    categoria: {
      hasChanged: false,
      value: "",
    },
    descricao: {
      hasChanged: false,
      value: "",
    },
    formaPagamento: {
      hasChanged: false,
      value: "",
    },
  });

  const handleSubmit = () => {
    debugger;


    expense.moeda = document.getElementById("moeda").value;
    expense.valor = document.getElementById("valor").value;
    expense.descricao = document.getElementById("descricao").value;
    expense.pagamento = document.getElementById("pagamento").value;
    expense.categoria = document.getElementById("categoria").value;

    setExpenses((oldExpenses) => [...oldExpenses, expense]);
  };

  const handleAddExpense = () => {
    dispatch(addExpense({
      id: uuidv4(),
      ...expenses
    }))
    setExpenses(expense)
  }

  const isValorValid = (valor) => {
    return /^\d*$/.test(valor);
  };

  var isOpen = false;

  const expandForm = () => {
    if (isOpen == false) {
      isOpen = true;
      document.getElementById("expense-form-card").style.height = "540px";
    } else {
      isOpen = false;
      document.getElementById("expense-form-card").style.height = "90px";
    }
  };

  return (
    <div className="expense">
      <div className="expense-form-card" id="expense-form-card">
        <div className="expense-form-title">
          <h1>NOVA DESPESA</h1>
          <button id="button" onClick={expandForm}>
            +
          </button>
        </div>
        <form className="form-group">
          <div className="form-group-1">
            <label htmlFor="moeda">
              <p>Moeda</p>
              <select id="moeda" name="moeda" className="expense-moeda">
                <option value="real">Real</option>
                <option value="dolar">Dolar</option>
                <option value="euro">Euro</option>
              </select>
            </label>

            {/* <Input id='valor' type='number'>Valor</Input> */}
            <label htmlFor="valor">
              <div className="mensage">
                <p>Valor</p>
                {form.valor.hasChanged && !isValorValid(form.valor.value) && (
                  <div data-testid="valor-invalid">
                    ERRO: Digite apenas números.
                  </div>
                )}
              </div>
              <input
                type="text"
                id="valor"
                name="valor"
                placeholder="Valor"
                onChange={(event) =>
                  setForm({
                    ...form,
                    valor: {
                      hasChanged: true,
                      value: event.target.value,
                    },
                  })
                }
                data-testid="valor"
              />
            </label>
          </div>

          <div className="form-group-2">
            <Input id="descricao" type="text">
              Descriçao
            </Input>
          </div>

          <div className="form-group-3">
            <label htmlFor="pagamento">
              <p>Forma de Pagamento</p>
              <select
                id="pagamento"
                name="pagamento"
                className="expense-pagamento"
              >
                <option value="dinheiro">Dinheiro</option>
                <option value="pix">PIX</option>
                <option value="cartao">Cartao</option>
              </select>
            </label>

            {/* <Input id='categoria' type='text'>Categoria</Input> */}
            <label htmlFor="categoria">
              <p>Categoria</p>
              <input type="text" id="categoria" name="categoria" />
            </label>
          </div>

          <div className="form-group-4">
            <Link to="/wallet">
              <Button id="login-button" onClick={handleAddExpense}>
                Cadastrar
              </Button>
            </Link>
          </div>
        </form>
      </div>

      <div className="expense-list-card">
        <div className="expense-list-title">
          <h1>MINHAS DESPESAS</h1>
        </div>
        <div className="exp-table">
          <div className="exp-table-header">
            <div
              className="exp-table-title"
              id="descricao"
              style={{ width: "40%", marginLeft: "2.5%" }}
            >
              <p>DESCRIÇÃO</p>
            </div>
            <div
              className="exp-table-title"
              id="moeda"
              style={{ width: "20%" }}
            >
              <p>MOEDA</p>
            </div>
            <div
              className="exp-table-title"
              id="valor"
              style={{ width: "20%" }}
            >
              <p>VALOR</p>
            </div>
            <div
              className="exp-table-title"
              id="categoria"
              style={{ width: "30%" }}
            >
              <p>TAGS</p>
            </div>
            <div
              className="exp-table-title"
              id="pagamento"
              style={{ width: "30%" }}
            >
              <p>FORMA DE PAGAMENTO</p>
            </div>
          </div>
          <div className="exp-table-body">
            {expenses.map((item) => (
              <div className="exp-table-row">
                <div
                  className="exp-table-cell"
                  id="descricao"
                  style={{ width: "40%", marginLeft: "2.5%" }}
                >
                  <p>{item.descricao}</p>
                </div>
                <div
                  className="exp-table-cell"
                  id="moeda"
                  style={{ width: "20%" }}
                >
                  <p>{item.moeda}</p>
                </div>
                <div
                  className="exp-table-cell"
                  id="valor"
                  style={{ width: "20%" }}
                >
                  <p>{item.valor}</p>
                </div>
                <div
                  className="exp-table-cell"
                  id="categoria"
                  style={{ width: "30%" }}
                >
                  <p>{item.categoria}</p>
                </div>
                <div
                  className="exp-table-cell"
                  id="pagamento"
                  style={{ width: "30%" }}
                >
                  <p>{item.pagamento}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
