
const Section = ({titulo, children}) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">{titulo}</h1>
      <div className="">
        {children}
      </div>
    </div>
  )
}

export default Section
