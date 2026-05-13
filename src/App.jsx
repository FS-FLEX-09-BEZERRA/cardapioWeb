import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Carrinho from "./pages/Carrinho"
import Layout from "./components/Layout"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route index path="/login" element={<Login />} />
            <Route element={<Layout/>}>
              <Route path="/" element={<Home />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
