import React, {Component} from 'react';
import Results from './searchresults.jsx';

export class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showResults: false
        }
    }


    checkthis() {
//todo remove
        console.log('searching');


        this.setState({showResults:true});
        //todo remove
        console.log('testing this.state.showResults',this.state.showResults);
    }

    render() {
        return (<div><input type="text" placeholder="search for you lunch"/>
                <button className="btn btn-default" onClick={() => this.checkthis()}>Go!</button>kut
                <Results visible={this.state.showResults}/>
            </div>

        );
    }
}


export default Search;