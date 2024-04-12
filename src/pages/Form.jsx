import { useState } from "react";
// COMPONENTS
import TextInput from '../components/TextInput/TextInput'
// CSS
import './Form.css'

function Form(props) {
    const [name, setName] = useState(""); // value of the Name input
    const [nameIsValid, setNameIsValid] = useState(true); // is the value of the Name input valid (unique)

    return (
        <main className="form-page">
            <form>
                <TextInput
                    labelText="Name"
                    inutId="name-input"
                    getsetValue={{name: name, setName: setName}}
                    getsetValidation={{nameIsValid: nameIsValid, setNameIsValid: setNameIsValid}}
                    placeholderText="Please enter a unique name"
                    containerClassname="grid-container"
                />
                <select>
                    <option>Select a category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                </select>
                <div className="control-buttons-container">
                    <button type="button">Clear</button>
                    <button type="button">Add</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </form>
        </main>
    )
}

export default Form;
