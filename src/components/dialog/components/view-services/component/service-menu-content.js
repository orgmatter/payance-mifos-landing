import React from 'react';

export default function ServiceMenuContent(props) {

    const { menuContentType } = props;

    switch(menuContentType) {

        case "installation":
            return (
                <div className="menu-content-cover">
                    <h2 className="menu-content-h">Installation</h2>
                    <p className="menu-content-p">So you've heard about the Mifos-x core banking, and you're looking to set it up and rolling to power your banking operations? We provide quality installation services that sits perfectly on any infrastructure your organisations may chose to use, be it <b>cloud-based, on-premise</b>, or <b>Saas</b>, paycore is sure to get you up and running with the Mifos-x banking platform in record time.</p>
                </div>
            )
        case "migration":
            return (
                <div className="menu-content-cover">
                    <h2 className="menu-content-h">Migration</h2>
                    <p className="menu-content-p">Are you currently running an existing core banking platform and looking to migrate to a more robust and efficient one like Mifos-x, it is... that most financial institutions occassionally seek to migrate from their core banking to a new one when its  failing to meet expectations. Some may </p>
                </div>
            )
        case "configuration":
            return (
                <div className="menu-content-cover">
                    <h2 className="menu-content-h">Configuration</h2>
                    <p className="menu-content-p">Are you new to the Mifos-x community app, and you need a few things setup but you dont know your way around the domain, we got you covered. Though Mifos-x platform is designed with most ready to use features, it's highly recommended that your financial institutions makes some additional configuration in order to maximise its full potentials. Paycore provides a configuration suitable for your organizational use case. </p>
                </div>
            )
        case "integration":
            return (
                <div className="menu-content-cover">
                    <h2 className="menu-content-h">Integration</h2>
                    <p className="menu-content-p">Mifos-x Apache Fineract, is a very robust and scalable core banking platform that supports third party integrations like Point of Sales, agent banking, NIBBS, Credit Bureau etc, so whether you're currently relying on any third party or would like to integrate more, paycore provides you integration services to help support your core banking operations.</p>
                </div>
            )
        case "customization":
            return (
                <div className="menu-content-cover">
                    <h2 className="menu-content-h">Customization</h2>
                    <p className="menu-content-p">Though the Mifos-x platform which is a combination of the community app and Fineract is built and can be easily deployed and used straight out of the box, paycore is aware that due to wide variations of use case, most financial institutions may choose to make modifications and customization of either partial or the entire stack of the platform functionality, and we are fully to provide customization services that's perfect for your financial operations. </p>
                </div>
            )
        case "upgrade":
            return (
                <div className="menu-content-cover">
                    <h2 className="menu-content-h">Upgrade</h2>
                    <p className="menu-content-p">Upgrade</p>
                </div>
            )
        case "maintenance":
            return (
                <div className="menu-content-cover">
                    <h2 className="menu-content-h">Maintenance</h2>
                    <p className="menu-content-p">Maintenance</p>
                </div>
            )
        case "application-building":
            return (
                <div className="menu-content-cover">
                    <h2 className="menu-content-h">Application Building (Mobile banking)</h2>
                    <p className="menu-content-p">Looking to take Mifos-x core banking a step further, you want to make it possible for all your customers to have access to their account and also perform other self service functionality like deposit and withdrawals, reach out to us and lets help you build the next generation mobile bank today</p>
                </div>
            )
        case "tenancy":
            return (
                <div className="menu-content-cover">
                    <h2 className="menu-content-h">Tenancy</h2>
                    <p className="menu-content-p">We understand that there are cases where some financial institutions may have heard about the Mifos-x core banking platform, and want to give it a try but dont have the finacial capacity to go fullscale, that's why we decided to provide the tenancy service that lets you rent and use the core platform on our server to help reduce cost of full implementation until you're ready to take ownership.</p>
                </div>
            )
        default:
            return (
                <div className="menu-content-cover">
                    <h2 className="menu-content-h">Installation</h2>
                    <p className="menu-content-p">So you've heard about the Mifos-x core banking, and you're looking to set it up and rolling to power your banking operations? We provide quality installation services that sits perfectly on any infrastructure your organisations may chose to use, be it <b>cloud-based, on-premise</b>, or <b>Saas</b>, paycore is sure to get you up and running with the Mifos-x banking platform in record time.</p>
                </div>
            )
    }

    
}