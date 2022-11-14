import './App.css';
import Login from './components/login/Login';
import NewExpense from './components/expense/NewExpense';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
