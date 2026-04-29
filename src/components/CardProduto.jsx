
const CardProduto = ({produto}) => {
  return (
    <div className="p-3 flex justify-between bg-black/10 mb-5 w-87.5">
      <div className="fex flex-col w-250px">
      <h2 className="font-bold text-xl">{produto.desc}</h2>
      <h3 className="text-1x1 mt-2">Prove já o melhor sushi da região</h3>
      <span className="text-red-500 font-bold mt-10">R$ {(produto.valor).toFixed(2)}</span>

      </div>
      <div className="relative">
        {produto.categoria=='oferta'&& 
        <div className="absolute right-0.5 top-1 bg-red-600 font-bold text-[10px] px-2 py-1 rounded-2xl border-r-red-10">PROMO</div>}
        <img className="rounded h-40 w-50 object-cover" src={produto.img} alt={produto.desc} />
       </div> 
    </div>
  )
}

export default CardProduto