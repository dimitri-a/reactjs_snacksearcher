import React, {Component} from 'react';

export class Results extends Component {

    render() {
        let results = 'results hello';
        //todo remove
        console.log('testing this.props.visible', this.props.visible);
        if (this.props.visible) {
            results = <div>
                <div className="row">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Broodje_shoarma.jpg/260px-Broodje_shoarma.jpg"
                        alt=""/>
                </div>
                <div className="row">
                    <img
                        alt=""/>
                </div>

            </div>
        }

        return (<div>{results}</div>);
    }

}

export default Results;