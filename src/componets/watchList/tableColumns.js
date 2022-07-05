import './watchList.sass';

const tableColumns = () => {
    return (
        <li className="tablecolumns d-flex justify-content-between">
            <div className="tablecolumns_1">Name</div>
            <div className="tablecolumns_2">Price</div>
            <div className="tablecolumns_3">Chanee</div>
            <div className="tablecolumns_4">Market Cap</div>
        </li>
    )
}

export default tableColumns;