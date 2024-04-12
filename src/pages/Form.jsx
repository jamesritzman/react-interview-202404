function Form(props) {
    return (
        <main className="form-page">
            <form>
                <input type="text" placeholder="Name" />
                <select>
                    <option>Select a category</option>
                </select>
            </form>
        </main>
    )
}

export default Form;
