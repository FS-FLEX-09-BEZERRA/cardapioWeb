
const CardProduto = ({produto}) => {
  return (
    <div className="p-8 flex justify-between bg-black/10 mb-5">
      <div>
      <h2 className="font-bold text-xl mb-3">{produto.desc}</h2>
      <span className="text-red-500 font-bold">R$ {(produto.valor).toFixed(2)}</span>
      </div>
        <img className="rounded h-50 w-50 object-cover" src={produto.img} alt={produto.desc} />
    </div>
  )
}

export default CardProduto
