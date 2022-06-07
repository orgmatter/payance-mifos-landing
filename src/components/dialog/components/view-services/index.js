import React, { useState } from "react";
import ServiceMenuContent from "./component/service-menu-content";

export default function ViewServices(props) {

    const {  } = props;

    const [menuContentType, setMenuContentType] = useState(null);

    const handleMenuLinkHover = (e) => {

        e.preventDefault();

        const { id } = e.target;

        setMenuContentType(id);
    }

    const handleMenuLinkClick = (e) => {
        
        e.preventDefault();

        const { id } = e.target;
        
        setMenuContentType(id);
    }
    
    return (
        <div className="view-services-cover-flex">
            <div className="view-services-cover-item">
                <div className="service-menu-cover-flex">
                    <div className="service-menu-cover-item">
                        <div className="menu-link-cover-flex">
                            <div className="menu-link-cover-item">
                                <ul className="menu-cover-ul">
                                    <li className="menu-cover-li">
                                        <a className="list-a" id="installation" href="#" onClick={handleMenuLinkClick} onMouseOver={handleMenuLinkHover}>Installation</a>
                                    </li>
                                    <li className="menu-cover-li">
                                        <a className="list-a" id="migration" href="#" onClick={handleMenuLinkClick} onMouseOver={handleMenuLinkHover}>Migration</a>
                                    </li>
                                    <li className="menu-cover-li">
                                        <a className="list-a" id="configuration" href="#" onClick={handleMenuLinkClick} onMouseOver={handleMenuLinkHover}>Configuration</a>
                                    </li>
                                    <li className="menu-cover-li">
                                        <a className="list-a" id="integration" href="#" onClick={handleMenuLinkClick} onMouseOver={handleMenuLinkHover}>Integration</a>
                                    </li>
                                    <li className="menu-cover-li">
                                        <a className="list-a" id="customization" href="#" onClick={handleMenuLinkClick} onMouseOver={handleMenuLinkHover}>Customization</a>
                                    </li>
                                    <li className="menu-cover-li">
                                        <a className="list-a" id="upgrade" href="#" onClick={handleMenuLinkClick} onMouseOver={handleMenuLinkHover}>Upgrade</a>
                                    </li>
                                    <li className="menu-cover-li">
                                        <a className="list-a" id="maintenance" href="#" onClick={handleMenuLinkClick} onMouseOver={handleMenuLinkHover}>Maintenance</a>
                                    </li>
                                    <li className="menu-cover-li">
                                        <a className="list-a" id="application-building" href="#" onClick={handleMenuLinkClick} onMouseOver={handleMenuLinkHover}>Application Building</a>
                                    </li>
                                    <li className="menu-cover-li">
                                        <a className="list-a" id="tenancy" href="#" onClick={handleMenuLinkClick} onMouseOver={handleMenuLinkHover}>Tenancy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="service-menu-cover-item">
                        <div className="menu-content-cover-flex">
                            <div className="menu-content-cover-item">
                                <ServiceMenuContent menuContentType={menuContentType} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}