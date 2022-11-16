import Input from "../input/Input";
import Button from "../button/Button";
import "./Expense.css"


export default function Expense() {
  return (
    <div className="expense-main">
      <div className="expense-action">
        <div className="titulo">
          <h1>NOVO DESPESA</h1>
          <h1>+</h1>
        </div>
        <div className="expense-form1">
        <select name="moeda">
          <option value="valor1">Real</option>
          <option value="valor2">Dolar</option>
          <option value="valor3">Euro</option>
        </select>

        <Input id='valor' type='number'>Valor</Input>
        </div>

        <div className="expense-form2">
        <Input id='descricao' type='text'>Descriçao</Input>
        </div>

        <div className="expense-form3">
        <select name="Forma de Pagamento">
          <option value="valor1">Dinheiro</option>
          <option value="valor2">PIX</option>
          <option value="valor3">Cartao</option>
        </select>

        <Input id='categoria' type='text'>Categoria</Input>

        </div>
      </div>
    </div>
  )
}