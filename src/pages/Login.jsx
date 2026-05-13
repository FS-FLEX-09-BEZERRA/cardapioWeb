import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    console.log(email, password)
    setLoading(true)
    try {
      const usuarios = await fetch("http://localhost:3000/usuarios")
      const res = await usuarios.json()
      const sucesso = res.find((usuario) => (
        usuario.email === email && usuario.password === password
      ))
      console.log(res)
      if (sucesso) {
        navigate("/")
      }
    } catch (error) {
      console.error("Erro na requisição", error)
    }
  }

  return (
    <>
    { loading ? <p>Carregando...</p> : (
    <div className="bg-gray-950 h-screen flex justify-center items-center">
      <form className="bg-gray-900/95 w-1/2 flex justify-around items-center py-10 rounded-2xl" onSubmit={handleLogin}>
        <div className="rounded-full border-6 border-red-600 w-40 h-40 flex justify-center items-center bg-black left-10">
          <h1 className="text-white font-bold text-2xl px-4 text-center">SUSHI DIGITAL</h1>
        </div>
        <div className="w-1/2 grid gap-2 justify-items-end">
          <input className="w-full bg-white/45 p-1.5 rounded" type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full bg-white/45 p-1.5 rounded" type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-red-700 rounded px-4 py-1.5 w-1/3" type="submit">Entrar</button>
        </div>
      </form>
    </div> )}
  </>
  )
}

export default Login