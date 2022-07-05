class PriceService {
    _apiBase = 'https://api.coingecko.com/api/v3/';
    _apiCoinsId = 'coins/';
    _apiCoinsIdParameters = '?localization=false&tickers=true&market_data=false&community_data=false&developer_data=false&sparkline=false';

    getResource = async (url) => {
        let getResult = await fetch(url);

        if (!getResult.ok) {
            throw new Error(`could not fetch ${url}, status: ${getResult.status}`);
        }

        return await getResult.json();
    }

    getAllPrice = async () => {
        const bitcoin = await this.getResource(`${this._apiBase}${this._apiCoinsId}bitcoin${this._apiCoinsIdParameters}`);
        const ethereum = await this.getResource(`${this._apiBase}${this._apiCoinsId}ethereum${this._apiCoinsIdParameters}`);
        const litecoin = await this.getResource(`${this._apiBase}${this._apiCoinsId}litecoin${this._apiCoinsIdParameters}`);
        const aave = await this.getResource(`${this._apiBase}${this._apiCoinsId}aave${this._apiCoinsIdParameters}`);
        
        const coinArr = [].concat(bitcoin, ethereum, litecoin, aave);
        return coinArr.map(this._transformPrice);
    }

    _transformPrice = (coinArr) => {
        return {
            id: coinArr.id,
            name: coinArr.name,
            ticker: coinArr.tickers[0].base,
            price: coinArr.tickers[0].last
        }
    }
}

export default PriceService;