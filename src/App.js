import { useSelector } from 'react-redux';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

import './App.css';
import Basket from './pages/Basket/Basket';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import SignIN from './pages/SignIn/SignIN';

function App() {
  const state= useSelector(state=>state.basket)
  const user= state[0].user
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={user? <Home/> : <SignIN/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/basket' element={<Basket/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
