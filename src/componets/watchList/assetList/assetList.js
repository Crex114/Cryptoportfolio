import AssetListItem from './assetListItem';
import './assetListItem.sass';


const assetList = ({ data }) => {

    const assetListItem = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <AssetListItem key={id} {...itemProps} /> // name={item.name} price={item.price}
        )
    });

    return (
        <>
            { assetListItem }
        </>
    )

}

export default assetList;