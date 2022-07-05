import './assetListItem.sass';

const assetListItem = (props) => {

    const { name, img, price, chanee, marketcap } = props;

    let chaneeStyleDefault = 'list-group-item_3';

    if (chanee > 0) {
        chaneeStyleDefault += ' text-success';
    } else {
        chaneeStyleDefault += ' text-danger';
    }

    return (

        <li className="list-group-item d-flex justify-content-between">
            <div className="list-group-item_1">
                <img src={img} alt={name} />
                <span>{name}</span>
            </div>
            <div className="list-group-item_2">{'$' + price}</div>
            <div id="list-group-item_3" className={chaneeStyleDefault}>{chanee + '%'}</div>
            <div className="list-group-item_4">{marketcap + 'M'}</div>
        </li>

    )

}

export default assetListItem;