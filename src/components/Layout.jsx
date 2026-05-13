import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
const Layout = () => {
  return (
    <div>
      <Header/>      
      <Outlet/>
    </div>
  )
}

export default Layout
