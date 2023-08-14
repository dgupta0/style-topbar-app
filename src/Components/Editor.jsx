import { useContext } from "react"
import InputsContext from "../Context/InputsContext"
export default function Editor() {
    const { inputs, setInputs } = useContext(InputsContext)
    const { bgColor, font, text } = inputs;

    function handleBg(e) {
        console.log(e.target.value)
        setInputs(prevState => ({
            ...prevState,
            bgColor: e.target.value
        }))
    }
    function handleFont(e) {
        console.log(e.target.value)
        setInputs(prevState => ({
            ...prevState,
            font: e.target.value
        }))
    }

    function handleText(e) {
        console.log(e.target.value)
        setInputs(prevState => ({
            ...prevState,
            text: e.target.value
        }))
    }

    return (
        <div className="editor">
            <label>
                Select topbar background:
                <input type="color"
                    onChange={handleBg}
                    value={bgColor} />
            </label>
            <label>
                Set font color:
                <input type="color"
                    onChange={handleFont}
                    value={font} />
            </label>
            <label>
                Set Text:
                <input type="text"
                    onChange={handleText}
                    value={text} />
            </label>
        </div>
    )
}