import { useState, useEffect } from "react";
// COMPONENTS
import TextInput from '../components/TextInput/TextInput'
import Dropdown from '../components/Dropdown/Dropdown'
// APIs
import { getLocations } from '../mock-api/apis'
// CSS
import './Form.css'

function Form(props) {
    const [name, setName] = useState(""); // value of the Name input
    const [nameIsValid, setNameIsValid] = useState(true); // is the value of the Name input valid (unique)?
    const [locations, setLocations] = useState([]); // list of locations to choose from
    const [chosenLocation, setChosenLocation] = useState(""); // the location the user chose from the dropdown


    async function loadLocations() {
        const listOfLocations = await getLocations();
        /* The mockup showed a particular order, but unless there is a reason behind
           that order, I would normally alphabetize the list (and/or maybe put the
           US at the top if we suspected a large majority of the locations to
           be in the US)
        */
        listOfLocations.sort();
        setLocations(listOfLocations);
    }

    useEffect(() => {
        /* Since the list of location choices is static, we can simply load that
           list once and store it for re-use each time the dropdown is rendered.
           If this were a live API, I would use tanstack-query to load and cache
           the values, instead of this useEffect hook.
        */
        loadLocations()
    }, [])

    return (
        <main className="form-page">
            <form>
                <TextInput
                    labelText="Name"
                    inutId="name-input"
                    getsetValue={{name: name, setName: setName}}
                    getsetValidation={{nameIsValid: nameIsValid, setNameIsValid: setNameIsValid}} // could be abbreviated, but shown in full for clarity
                    placeholderText="Please enter a unique name"
                    containerClassname="grid-container"
                />
                <Dropdown
                    options={locations}
                    getsetValue={{chosenLocation: chosenLocation, setChosenLocation: setChosenLocation}}
                    selectId="location-dropdown"
                    containerClassname="grid-container"
                />
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
            <p>{chosenLocation}</p>
        </main>
    )
}

export default Form;
