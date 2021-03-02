import React from 'react';

export default class HouseForm extends React.Component {
    render() {
        return (
            <div id="new-house" className="jumbotron">
                <h2>New House</h2>
                <input type="text" id="new-house-name" className="form-control" /><br />
                <button id="create-new-house" className="btn btn-primary form-control">Create</button>
            </div>
        );
    }
}