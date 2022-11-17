import './App.css';
import Login from './components/login/Login';
import Expense from './components/expense/Expense';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
<<<<<<< HEAD
        <Route path='/wallet' element={<Expense />} />
=======
        <Route path='/expense' element={<Expense />} />
>>>>>>> ee8035be30fc79e5a63f1015a3f20eab9c213eb5
      </Routes>
    </BrowserRouter>
  );
}

export default App;
