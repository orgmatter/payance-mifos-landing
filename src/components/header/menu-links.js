import React from 'react';
import { pageRoutes } from "../../page-routes";
import { LinkComponent, MenuLinkDropdown } from '../ui-helper';

export default function MenuLinks(props) {

    const { routeLocationProps, dialogComponentProps } = props;

    return (
        <>
            {
                pageRoutes.map((pageRoute, index) => {
                    const { routeUrl, name, subRoutes } = pageRoute;

                    return (
                        <>
                            <div className="menu-item-cover-item" key={index}>
                                <LinkComponent url={routeUrl} label={name} dialogComponentProps={dialogComponentProps} />
                            </div>
                            {/* {
                                name === 'Services' && <MenuLinkDropdown routeUrl={routeUrl} subRoutes={subRoutes} menuIndex={index} routeLocationProps={routeLocationProps} />
                            }
                            {
                                name === 'Products' && <MenuLinkDropdown routeUrl={routeUrl} subRoutes={subRoutes} menuIndex={index} routeLocationProps={routeLocationProps} />
                            } */}
                        </>
                    )
                })
            }
        </>
    )
}