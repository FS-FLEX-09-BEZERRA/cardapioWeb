import CardProduto from "./CardProduto.jsx"

const ListaProduto = ({produtos, categoria}) => {
  const produtosFiltrados = produtos.filter((item)=> {
    return item.categoria ===  categoria
  })
  console.log(produtos)
  return (
    <div className="flex justify-center gap-2 flex-wrap ">
      {produtosFiltrados.map((produto)=> (
        <CardProduto key={produto.id} produto={produto} />
      ))}
    </div>
  )
}

export default ListaProduto
