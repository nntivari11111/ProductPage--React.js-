import "./App.css";
import { Route, Routes } from "react-router-dom";
import RequiredAuth from "./hoc/RequiredAuth";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import CartPages from "./pages/CartPages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="/"
          element={
            <Home />   
          }
        />
        <Route
          path="cart"
          element={
             <RequiredAuth>
           <CartPages/>
             </RequiredAuth>
          }
        />
      </Routes>
         
    </div>
  );
}

export default App;