import { isNameValid } from '../../mock-api/apis'
import './TextInput.css'


async function handleInputChange(e, getsetValue, getsetValidation) {
    // set the new value of the input based on the newly typed text
    getsetValue.setName(e.target.value);

    // commpare the new value of the input to list of valid names per "api"
    // Note: can NOT use getsetValue.name because .setName is async (.get may not reflect the new value yet)

    /*
        Trim leading/trailing white space from the input so that a user can't simply add spaces before/after the name
        in order to create a duplicate-looking value
    */
    const isValid = await isNameValid(e.target.value.trim());
    /*
       The async nature of calling this function on every character could very well result
       in a race condition (or two, or three, or...) which is why I feel this kind of
       validation should be done on "submitting" the form (also for performance reasons).
    */
    getsetValidation.setNameIsValid(isValid);
}


function TextInput(props) {
    const {
        labelText = 'Input:',
        inputId,
        getsetValue,
        getsetValidation,
        placeholderText = 'Enter text here...',
        containerClassname = ''
    } = props;

    return (
        <div className={`textinput-component ${containerClassname}`}>
            <label htmlFor={inputId} className="input-label">{labelText}</label>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder={placeholderText}
                    id={inputId}
                    value={getsetValue.name}
                    onChange={(e) => handleInputChange(e, getsetValue, getsetValidation)}
                />
                { !getsetValidation.nameIsValid && <p className="validation-message">this name has already been taken</p> }
            </div>
        </div>
    )
}

export default TextInput;
