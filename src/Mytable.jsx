import { useState } from "react"

export default function Mytable() {
    const [userName, setUserName] = useState("Sumit")
    const [inputField, setInputField] = useState("")
    
    const changeUserName = () => {
        setUserName(inputField)
    }

    return (
        <div>
            <p>{userName}</p>
            <input type="text" onChange={({target}) => { setInputField(target.value)}}/>

            <input type="button" value="Change UserName" onClick={changeUserName} />
        </div>
    )
}

// State is a variable or data that is accessible by the component itself
// Prop is the attribute for a component that is passed to child component as argument
// React specific props
// User defined props

// Always use useState to define and access a state
// useState is a hook that is used for state management
// Syntax: const [variableName,setterFunction]=useState(initialValue)

// id
// name
// value
// onchange = ({target}) => {
//     var input = document.getElementById("")
//     const { name, value } = target
    
// }
