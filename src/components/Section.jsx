
const Section = ({titulo, children, textLeft}) => {
  return (
    <div className="px-54">
      <h1 className={`${textLeft ? "text-start":"text-center" } text-3xl font-bold mb-4`}>{titulo}</h1>
      <div className={`flex ${textLeft ? "justify-start" : "justify-center"}`}>
        {children}
      </div>
    </div>
  )
}

export default Section
