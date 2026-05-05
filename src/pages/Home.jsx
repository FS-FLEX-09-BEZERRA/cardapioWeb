
import ListaProduto from "../components/ListaProduto.jsx"
import Section from "../components/Section"
// import temakihot from "../assets/temakihot.png"
// import temakiskin from "../assets/temakiskin.png"
// import temakicam from "../assets/temakicam.png"
// import temakisalmao from "../assets/temakisalmao.png"
// import combinado1 from "../assets/combinado1.png"
// import combinado2 from "../assets/combinado2.png"
// import combinado3 from "../assets/combinado3.png"
import { useEffect, useState } from "react"


//Hook - useState: usado para manipular estados de uma constante
// uso: const [currentValue, function] = useState(initialValue)

const Home = () => {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  //useEffect - sem dependência, com dependência vazia, com dependência de parâmetro

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then(res => (res.json()))
      .then(data => {
        setProdutos(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Erro na requisição", error)
      })
  }, [])


  return (
    <>
      {loading ? <p>Carregando...</p> : (
        <>
          <Section titulo="Ofertas de Hoje">
            <ListaProduto produtos={produtos} categoria="oferta" />
          </Section>
          <Section titulo="Combinados">
            <ListaProduto produtos={produtos} categoria="combinados" />
          </Section>
          <Section titulo="Temakis">
            <ListaProduto produtos={produtos} categoria="temakis" />
          </Section>
        </>
      )}
    </>
  )

}

export default Home
