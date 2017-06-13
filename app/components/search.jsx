import React, {Component} from 'react';

export class Search extends Component {

checkthis(){
//todo remove
console.log('hfkjashfkhsdk');
}

    render() {
        return (<div><input type="text" placeholder="search for you lunch"/>
                <button className="btn btn-default"  onClick={() => this.checkthis()} >Go!</button> </div>
        );
    }
}

export default Search;