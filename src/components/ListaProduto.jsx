import CardProduto from "./CardProduto.jsx"

const ListaProduto = ({produtos, categoria}) => {
  const produtosFiltrados = produtos.filter((item)=> {
    return item.categoria ===  categoria
  })
  console.log(produtos)
  return (
    <div>
      {produtosFiltrados.map((produto, index)=> (
        <CardProduto key={index} produto={produto} />
      ))}
    </div>
  )
}

export default ListaProduto
