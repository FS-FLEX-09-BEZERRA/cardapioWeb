
import ListaProduto from "../components/ListaProduto.jsx"
import Section from "../components/Section"
import temakihot from "../assets/temakihot.png"
import temakiskin from "../assets/temakiskin.png"
import temakicam from "../assets/temakicam.png"
import temakisalmao from "../assets/temakisalmao.png"
import combinado1 from "../assets/combinado1.png"
import combinado2 from "../assets/combinado2.png"
import combinado3 from "../assets/combinado3.png"

const Home = () => {
  const produtos = [
    {
      id: 1,
      desc: "Temaki Hot",
      img: temakihot,
      valor: 39.90,
      categoria: "oferta"
    },
    {
      id: 2,
      desc: "Temaki Skin",
      img: temakiskin,
      valor: 39.90,
      categoria: "temakis"
    },
    {
      id: 3,
      desc: "Temaki Salmão",
      img: temakisalmao,
      valor: 39.90,
      categoria: "temakis"
    },
    {
      id: 4,
      desc: "Temaki Camarão",
      img: temakicam,
      valor: 39.90,
      categoria: "temakis"
    },
    {
      id: 5,
      desc: "Combinado 30 peças",
      img: combinado1,
      valor: 40.00,
      categoria: "combinados"
    },
    {
      id: 5,
      desc: "Combinado 40 peças",
      img: combinado2,
      valor: 50.00,
      categoria: "combinados"
    },
    {
      id: 6,
      desc: "Combinado 60 peças",
      img: combinado3,
      valor: 70.00,
      categoria: "combinados"
    },
  ]

  return (
    <>
    <h1>Página Home</h1>
    <Section titulo="Ofertas de Hoje">
      <ListaProduto produtos={produtos} categoria="oferta"/>
    </Section>
      <Section titulo="Combinados">
        <ListaProduto produtos={produtos} categoria="combinados" />
      </Section>
      <Section titulo="Temakis">
        <ListaProduto produtos={produtos} categoria="temakis" />
      </Section>
    </>
  )
  
}

export default Home
