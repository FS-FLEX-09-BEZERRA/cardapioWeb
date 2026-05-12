
import * as Dialog from "@radix-ui/react-dialog";
import ListaProduto from "./ListaProduto.jsx";
import { useEffect, useState } from "react";

const Header = () => {
  const [produtos, setProdutos] = useState([])

  const menu = ["Promoções", "Horários", "Pedidos", "Login"]
  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then(res => (res.json()))
      .then(data => {
        setProdutos(data)
      })
      .catch((error) => {
        console.error("Erro na requisição", error)
      })
  }, [])


  return (
    <>
    <header className="bg-black px-20 py-15 flex justify-end relative mb-30">
      <div className="rounded-full border-6 border-red-600 w-40 h-40 flex justify-center items-center absolute bg-black left-10">
        <h1 className="text-white font-bold text-2xl px-4 text-center">SUSHI DIGITAL</h1>
      </div>
    {menu.map((item)=> (
      <Dialog.Root>
        <Dialog.Trigger className="w-32 text-white hover:underline underline-offset-8 cursor-pointer">
        {item}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
        
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
          <div className="bg-white rounded-md shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <Dialog.Title className="text-lg font-medium text-gray-800 ">
                PRODUTOS EM PROMOÇÃO
              </Dialog.Title>
              <Dialog.Close className="p-2 text-gray-400 rounded-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Dialog.Close>
            </div>
            <div>
              <ListaProduto produtos={produtos} categoria="oferta" />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    ))}
   </header>
    </>
  );
};

export default Header