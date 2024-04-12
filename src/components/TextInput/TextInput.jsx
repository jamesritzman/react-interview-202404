import './TextInput.css'

function TextInput(props) {
    const {
        labelText = 'Input:',
        inputId,
        getsetValue,
        placeholderText = 'Enter text here...',
        containerClassname = ''
    } = props;

    return (
        <div className={`textinput-component ${containerClassname}`}>
            <label htmlFor={inputId}>{labelText}</label>
            <div className="input-wrapper">
                <input type="text" placeholder={placeholderText} id={inputId} value={getsetValue.get} onChange={getsetValue.set} />
                <p className="validation-message">this name has already been taken</p>
            </div>
        </div>
    )
}

export default TextInput;
