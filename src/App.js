import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Input from './components/Input';
import Header from './components/Header';
import Signup from './components/Signup';aster
import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Input from './components/input/Input';
import Budgeting from './components/budgeting/Budgeting';
import Spending from './components/spending/Spending';
import Investing from './components/investing/Investing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/input' element={<Input/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/budgeting' element={<Budgeting/>}></Route>
          <Route path='/spending' element={<Spending/>}></Route>
          <Route path='/investing' element={<Investing/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
