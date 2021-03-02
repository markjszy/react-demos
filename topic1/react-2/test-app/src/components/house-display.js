import React from 'react';

// mock house data (we will learn more next week...)
// you will see an error about "unique key prop" for iteration, which we will discuss in the next topic
const houses = [
    { _id: 1, name: "Mark's house"},
    { _id: 22, name: "Lisa's house"}
]

const houseElmts = houses.map(house => 
    <div id={house._id} className="card">
        <div className="card-header">
            <h2>{house.name}</h2>
            <button className="btn btn-danger">Delete</button>
        </div>
        <div className="card-body">
            <div className="card">
                <div className="row">
                    <div className="col-sm">
                        <input type="text" className="form-control" placeholder="Room Name" />
                    </div>
                    <div className="col-sm">
                        <input type="text" className="form-control" placeholder="Room Area" />
                    </div>
                </div>
                <button className="btn btn-primary form-control">Add</button>
            </div>
        </div>
    </div>
);

export default class HouseDisplay extends React.Component {
    render() {
        return (
            <div>
                {houseElmts}
            </div>
        );
    }
}