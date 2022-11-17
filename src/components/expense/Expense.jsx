import "./Expense.css"

var expenses = [
  { descricao: 'Macarrão', moeda: 'Dolar', valor: 30, tags: 'Alimento', formaPagamento: 'Pix' },
  { descricao: 'Roupa', moeda: 'Real', valor: 20, tags: 'Vestiário', formaPagamento: 'Dinheiro' },
  { descricao: 'P90', moeda: 'Euro', valor: 9000, tags: 'Arsenal', formaPagamento: 'Crédito' },
  { descricao: 'Macarrão', moeda: 'Dolar', valor: 30, tags: 'Alimento', formaPagamento: 'Pix' },
  { descricao: 'Roupa', moeda: 'Real', valor: 20, tags: 'Vestiário', formaPagamento: 'Dinheiro' },
  { descricao: 'P90', moeda: 'Euro', valor: 9000, tags: 'Arsenal', formaPagamento: 'Crédito' }
];

export default function Expense() {
  return (
    <div className="expense">
      <div className="expense-list-card">
        <div className="expense-list-title">
          <h1>MINHAS DESPESAS</h1>
        </div>
        <div className="exp-table">
          <div className="exp-table-header">
            <div className="exp-table-title" id="descricao"><p>DESCRIÇÃO</p></div>
            <div className="exp-table-title" id="moeda"><p>MOEDA</p></div>
            <div className="exp-table-title" id="valor"><p>VALOR</p></div>
            <div className="exp-table-title" id="tags"><p>TAGS</p></div>
            <div className="exp-table-title" id="forma"><p>FORMA DE PAGAMENTO</p></div>
          </div>
          <div className="exp-table-body">
            {
              expenses.map((item) => (
                <div className="exp-table-row">
                  <div className="exp-table-cell" id="descricao"><p>{item.descricao}</p></div>
                  <div className="exp-table-cell" id="moeda"><p>{item.moeda}</p></div>
                  <div className="exp-table-cell" id="valor"><p>{item.valor}</p></div>
                  <div className="exp-table-cell" id="tags"><p>{item.tags}</p></div>
                  <div className="exp-table-cell" id="forma"><p>{item.formaPagamento}</p></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}