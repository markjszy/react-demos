import React from 'react';

/**
 * Example using just `createElement` and not JSX...you will likely
 * not want to do this for very long!
 */
let e = React.createElement;

export default class WelcomeHeader extends React.Component {
    render() {
        return e('div', {className: 'card'}, 
        e('h1', {}, `Welcome to the application!`));
    }
}