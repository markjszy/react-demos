import React from 'react';

function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log(`Current props: ${JSON.stringify(this.props)}`);
            console.log(`Previous props: ${JSON.stringify(prevProps)}`);
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    LogProps.displayName = `LogProps(${getDisplayName(WrappedComponent)})`;

    return LogProps;
}

function getDisplayName(WrappedComponent) {
    /**
     * General-purpose utility function for obtaining display name
     */
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// simplified form that does not wrap display name for debugging
/*
function logProps(WrappedComponent) {
    return class extends React.Component {
        componentDidUpdate(prevProps) {
            console.log(`Current props: ${JSON.stringify(this.props)}`);
            console.log(`Previous props: ${JSON.stringify(prevProps)}`);
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
} */

export default logProps;