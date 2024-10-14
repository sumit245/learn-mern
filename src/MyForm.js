
import { useState } from "react"

export default function MyForm() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [result, setResult] = useState(0)
    return (
        <div id="formContainer">
            <div className="form-group">
                <label className="control-label" htmlFor="a">Enter A:</label>
                <input className="form-control" value={a} id="a" onChange={({ target }) => setA(target.value)} />
            </div>
            <div className="form-group">
                <label className="control-label" htmlFor="B">Enter B:</label>
                <input className="form-control" value={b} id="b" onChange={({ target }) => setB(target.value)} />
            </div>

            <div className="form-group">
                <input className="btn" type="button" value="Add" onClick={() => setResult(parseFloat(a) + parseFloat(b))} />
            </div>

            <p>Your Output is: {result} </p>

        </div>
    )
}

// 1. Design the frontend only
// 2. Use the state to store the values of the input fields
// 3. Use the state to store the result of the addition
// 4. properly use event handling
