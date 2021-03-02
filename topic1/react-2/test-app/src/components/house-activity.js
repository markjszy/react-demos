import React from 'react';
import HouseForm from './house-form';
import HouseDisplay from './house-display';

export default class HouseActivity extends React.Component {
    render() {
        return (
            <div>
                <HouseForm />
                <HouseDisplay />
            </div>
        );
    }
}