import React from 'react';
import MifosBody from './mifos-body';
import ServiceTypes from './service-types';

export default function SubServiceBody(props) {

    const { componentName } = props;

    const getContent = (name) => {
        switch(name) {
            case 'mifos':
                return (<MifosBody />)
            case 'service-types':
                return (<ServiceTypes />)
            default:
                return;
        }
    }

    return (
        <div className="sub-service-body-cover">
            {
                getContent(componentName)
            }
        </div>
    )
}