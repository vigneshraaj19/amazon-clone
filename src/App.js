import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home'
import './index.js';

function App() {
  return (
    <div className="App">
    <Routes>

      <Route path="/" element={<><Header/><Home/></>}  />
      <Route path="/checkout" element={<><Header/><Checkout /></>} />
      
    </Routes>
    </div>

  );
}

export default App;
