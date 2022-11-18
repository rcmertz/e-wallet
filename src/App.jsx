import './App.css';
import Login from './components/login/Login';
import Expense from './components/expense/Expense';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/wallet' element={<Expense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
