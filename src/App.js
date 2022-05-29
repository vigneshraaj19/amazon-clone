import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import './index.js';
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>

      <Route path="/" element={<><Home/></>}  />
      <Route path="/checkout" element={<><Checkout /></>} />
      <Route path="/login" element={<><Login /></>} />
    </Routes>
    </div>

  );
}

export default App;
