import { BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Header from "./components/Header"
import Login from "./pages/Login"
import Carrinho from "./pages/Carrinho"

const App = () => {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
