import React from 'react';
import { ServiceBody } from '../../components/body';

export default function Services(props) {

    const { componentName } = props;

    return (
        <div className="services-cover">
            <ServiceBody componentName={componentName} />
        </div>
    )
}