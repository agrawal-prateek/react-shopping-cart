import React from "react";

let read = require('json-loader!../data/data.json');

/** @namespace React.Component */

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            data: read
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                    </tbody>
                </table>
            </div>
        );
    }

}

class TableRow extends React.Component {
    /** @namespace this.props.data.discount */
    /** @namespace this.props.data.img_url */
    /** @namespace this.props.data.price */
    render() {
        return (
            <tr id={'tr' + this.props.data.id}>
                <td className="name mdl-shadow--2dp" id={'td' + this.props.data.id}>
                    <span className="img-span"><img src={this.props.data.img_url} className="bookcover"/></span>
                    <span className="item-name">{this.props.data.name}</span>
                    <span className="cross-button show-modal" id={'cross' + this.props.data.id}>X</span>
                </td>

                <td className="price" id={'price' + this.props.data.id}>$<span>{this.props.data.price}</span>
                </td>

                <td className="qty">
                    <span className="plus-minus plus" id={'plus' + this.props.data.id}>+ </span>
                    <span><input className="qty-input mdl-shadow--2dp" defaultValue={1}
                                 id={'input' + this.props.data.id}/></span>
                    <span className="plus-minus mins" id={'minus' + this.props.data.id}>  -</span>
                </td>
                <br/><br/><br/>
            </tr>
        );
    }
}
export default App;