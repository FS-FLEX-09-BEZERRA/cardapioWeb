import CardProduto from "../components/CardProduto"
import Section from "../components/Section"

const Home = () => {
  return (
    <>
    <h1>Página Home</h1>
    <Section titulo="Ofertas de Hoje">
      <CardProduto/>
    </Section>
      <Section titulo="Combinados">
        <CardProduto />
      </Section>
      <Section titulo="Temakis">
        <CardProduto />
      </Section>
    </>
  )
  
}

export default Home
