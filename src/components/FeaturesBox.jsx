
function FeaturesBox({title,icon,desc}) {
  return (
    <div className="text-white element-center flex-col text-center">
        <img src={`../../src/assets/${icon}`} alt="img" className="w-20 h-20 object-contain"/>
        <h4 className="text-xl font-semibold my-4">{title}</h4>
        <p className="font-normal font-sm text-gray-500 w-80">{desc}</p>
    </div>
  )
}

export default FeaturesBox