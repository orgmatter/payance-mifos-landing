import React from 'react';
import { ExpandMore } from '@material-ui/icons';
import DialogComponent from '../dialog';

export const LinkComponent = (props) => {

    const { url, label, dialogComponentProps } = props;

    const {
        handleDialogOpen,
        handleDialogClose,
        dialogOpen,
        componentType
    } = dialogComponentProps;

    // props object for dialog component
    const dialogProps = {
        handleDialogClose,
        dialogOpen,
        componentType
    }

    switch(label) {
        case 'Services':
            return (
                <a className="menu-item-link-cover" href="#services">
                    {label} 
                    {/* <ExpandMore /> */}
                </a>
            )
        case 'Products':
            return (
                <a className="menu-item-link-cover" href="#products">
                    {label} 
                    {/* <ExpandMore /> */}
                </a>
            )
        case 'Contact':
            return (
                <>
                    <DialogComponent dialogProps={dialogProps} />
                    <a className="menu-item-link-cover" href="#" onClick={(componentType) => handleDialogOpen('send-email')}>
                        {label}
                    </a>
                </>
            )
        default: 
        return (
            <a className="menu-item-link-cover" href={url}>
                {label}
            </a>
        )
    }
}

export const MenuLinkDropdown = (props) => {

    const { subRoutes, routeUrl, menuIndex, routeLocationProps } = props;

    const { pathname } = routeLocationProps;

    const resolveHref = (pathname, subRouteUrl, hashname) => {
        if(routeUrl !== '/services' || routeUrl !== '/products') {
            return `${subRouteUrl}${hashname}`;

        }
        return `${subRouteUrl}${hashname}`;
    }

    return (
        <ul className="link-menu-ul-cover" key={menuIndex}>
            {
                subRoutes.map((subRoute, index) => {

                    const { subRouteUrl, name, hashname } = subRoute;

                    return (
                        <li className="link-menu-li-cover" key={index}>
                            <a className="link-menu-a" href={resolveHref(pathname, subRouteUrl, hashname)}>{name}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export const scrollToSectionView = (hash) => {

    if(hash !== '') {

        var hashArr = hash.split('#');
        var sectionElemId = hashArr.pop();

        var sectionElem = document.getElementById(`${sectionElemId}-view`);

        sectionElem.scrollIntoView({
            block: "end",
            behavior: "smooth"
        })
    }
}