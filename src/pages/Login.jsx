
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const cadastros = [
    { email: "lucas@gmail.com", senha: "lucas2026" },
    { email: "bia@gmail.com", senha: "bia2026" },
    { email: "nayara@gmail.com", senha: "nayara2026" },
    { email: "vinicios@gmail.com", senha: "vinicios2026" },
    { email: "mariana@gmail.com", senha: "mariana2026" },
    { email: "joao@gmail.com", senha: "joao2026" },
    { email: "gabriel@gmail.com", senha: "gabriel2026" },
    { email: "richard@gmail.com", senha: "richard2026" },
  ]
  function handleSubmit(e) {
    e.preventDefault();

    const cadastroEnconstrado = cadastro.find(
      (user) => user.email === email && user.senha === senha
    );

    if (cadastroEncontrado) {
      alert("Login realizado com sucesso!");
    }
    else {
      alert("Email ou senha incorretos!");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white rounded-2xl shadow-lg w-80">
        <div className="bg-black w-full h-20 rounded-t-2xl flex items-center justify-center">
        <h1 className="text-2xl text-white font bold mt-1">
          Sushi Digital
        </h1>
        </div>
        <form on Submit={handleSubmit} className="flex flex-col gap-4 p-8">
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-5 w-fit rounded-lg hover:bg-red-600 transition duration-200 self-end">Entrar</button>
        </form>
      </div>
    </div>
  );

};

export default Login