import './DataTable.css'

function DataTable(props) {
    const { tableData } = props;

    const generateTableRows = (data) => {
        return data.map((entry, index) => {
            return (
                <tr key={index}>
                    <td>{entry.name}</td>
                    <td>{entry.location}</td>
                </tr>
            )
        })
    }
    return (
        <table className="data-table-component">
            <colgroup>
                <col />
                <col />
            </colgroup>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                { generateTableRows(tableData) }
            </tbody>
        </table>
    )
}

export default DataTable;
