import './assetCard.sass';
import { Component } from "react";
import PriceService from "../../services/PriceService";
import colorCard from './assetCardScript';

export default class assetCard extends Component {

    state = {
        assetCard: []
    }

    priceService = new PriceService();

    componentDidMount() {
        this.priceService.getAllPrice()
            .then(this.onAssetCardLoaded);
    }

    onAssetCardLoaded = (assetCard) => {
        this.setState({
            assetCard,
        });
    }

    renderItems(arr) {

        const items = arr.map((item) => {

            return (
                <div className="assetcard" data-ticker={item.ticker} data-price={item.price} key={item.id} >
                    <div className="assetcard_amountCrypto">{item.ticker}</div>
                    <div className="assetcard_amountDollar">${item.price}</div>
                </div>
            )
        });

        return (
            <>
                {items}
            </>
        )
    }

    render() {

        const { assetCard } = this.state;
        const content = this.renderItems(assetCard);

        colorCard();

        return (
            <>
                {content}
            </>

        )
    }

}