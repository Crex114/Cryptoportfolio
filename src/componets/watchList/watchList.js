import './watchList.sass';
import { Component } from 'react';
import AssetList from './assetList/assetList';
import SearchPanel from './sortCrypto/searchPanel';
import TableColumns from './tableColumns';

import band from '../../resources/icons/band.png';
import vechain from '../../resources/icons/vechain.png';
import aave from '../../resources/icons/aave.png';
import waves from '../../resources/icons/waves.png';
import dydx from '../../resources/icons/dydx.png';

export default class WatchList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'BAND', img: band, price: 2.42, chanee: -13.38, marketcap: 399.8, id: 1 },
                { name: 'VeChain', img: vechain, price: 7.48, chanee: 11.19, marketcap: 152.5, id: 2 },
                { name: 'Aave', img: aave, price: 0.0184, chanee: 7.57, marketcap: 1.2, id: 3 },
                { name: 'Waves', img: waves, price: 30.68, chanee: -6.80, marketcap: 399.8, id: 4 },
                { name: 'dydx', img: dydx, price: 1.06, chanee: 4, marketcap: 1.8, id: 5 }
            ],
            term: ''
        }
    }

    searchCrypto = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    render() {

        const { data, term } = this.state;
        const visibleData = this.searchCrypto(data, term);

        return (
            <div className="watchlist row">
                <div className='sort d-flex justify-content-between'>
                    <div className="average">Watch List</div>
                    <div className="d-flex justify-content-end">
                        <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    </div>
                </div>
                <TableColumns />
                <AssetList data={visibleData} />
            </div>
        )
    }
}