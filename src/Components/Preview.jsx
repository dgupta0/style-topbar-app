import { useContext } from "react"
import InputsContext from "../Context/InputsContext"
export default function Preview() {
  const { inputs } = useContext(InputsContext)

  const { bgColor, font, text } = inputs;
  return (
    <div className='preview'>
      <div
        className='bar'
        style={{ backgroundColor: bgColor }}>
        <p
          style={{ color: font }}
        >{text}</p>
      </div>
      <div className="bottom">
        <div className="round">
        </div>
      </div>
    </div>
  )
}