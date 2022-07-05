import './overview.sass';

import AssetCard from '../portfolio/assetCard';
import WatchList from '../watchList/watchList';
import { Component } from 'react';

export default class Overview extends Component {

    sortCardName() {
        let assetCard = document.querySelector('.asset');

        for (let i = 0; i < assetCard.children.length; i++) {
            for (let j = i; j < assetCard.children.length; j++) {
                if (assetCard.children[i].getAttribute('data-ticker') > assetCard.children[j].getAttribute('data-ticker')) {
                    let replacedNode = assetCard.replaceChild(assetCard.children[j], assetCard.children[i]);
                    return assetCard.children[i].parentNode.insertBefore(replacedNode, assetCard.children[i].nextSibling)
                }
            }
        }
    }

    render() {

        return (
            <div className='overview'>
                <div className="header row">
                    <h1>Overview</h1>
                </div>
                <div className="subheader justify-content-between row">
                    <h2>Portfolio</h2>
                    <button className="subheader_btn subheader_btn_sortname" onClick={this.sortCardName}></button>
                </div>
                <div className="asset d-flex justify-content-between row">
                    <AssetCard />
                </div>
                <WatchList />
            </div>
        )
    }

}