import './Dropdown.css'

function Dropdown(props) {
    const { options, getsetValue, selectId, containerClassname } = props

    function renderOptions(options) {
        return options.map(option => {
            return <option key={option}>{option}</option>
        })
    }


    return (
        <div className={`dropdown-component ${containerClassname}`}>
            <label htmlFor={selectId}>Location</label>
            <select id={selectId}>
                <option value="" disabled selected>Choose a location</option>
                { renderOptions(options) }
            </select>
        </div>
    )
}

export default Dropdown;
