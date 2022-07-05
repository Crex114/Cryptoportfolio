import { Component } from 'react';
import '../watchList.sass';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
                type="text"
                className='search'
                value={this.state.term}
                onChange={this.onUpdateSearch}
            />
        )
    }
}