
import './App.css';
import Auth from './Auth'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/login' element={<Auth/>}></Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
