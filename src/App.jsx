import './App.css';
import Login from './components/login/Login';
import NewExpense from './components/expense/Expense';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expense from './components/expense/Expense';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
