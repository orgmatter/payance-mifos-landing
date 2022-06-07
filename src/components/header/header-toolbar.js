import React from 'react';
import {Toolbar, Button} from '@material-ui/core';
import MenuLinks from './menu-links';
import DialogComponent from '../dialog';
import {assets} from "../../assets/images";

export default function HeaderToolbar(props) {

    const { dialogComponentProps, routeLocationProps } = props;

    const {
        handleDialogOpen,
        handleDialogClose,
        dialogOpen,
        componentType,
        dialogType
    } = dialogComponentProps;

    // props object for dialog component
    const dialogProps = {
        handleDialogClose,
        dialogOpen,
        componentType,
        dialogType
    }

    const { header } = assets;
    const { headerImages } = header;

    return (
        <Toolbar className="header-toolbar-cover">
            <DialogComponent dialogProps={dialogProps}/>
            <div className="header-menu-cover-left">
                <div className="logo-cover-flex">
                    <div className="logo-cover-item">
                        <img className="logo-img" src={headerImages[0]} alt="paycore logo" />
                    </div>
                </div>
            </div>
            <div className="header-menu-cover-center">
                <div className="menu-item-cover-flex">
                    <MenuLinks routeLocationProps={routeLocationProps} dialogComponentProps={dialogComponentProps} />
                </div>
            </div>
            <div className="header-menu-cover-right">
                <div className="menu-btn-cover-flex">
                    <div className="btn-cover-flex">
                        {/* <div className="btn-cover-item">
                            <Button 
                                className="btn-elem" 
                                type="button" 
                                variant="contained" 
                                color="primary"
                                onClick={(componentType, dialogType) => handleDialogOpen("request-demo", "form")}
                            >Request Demo</Button>
                        </div> */}
                        <div className="btn-cover-item">
                            <Button 
                                className="btn-elem" 
                                type="button" 
                                variant="outlined" 
                                color="primary"
                                onClick={(componentType, dialogType) => handleDialogOpen("get-quotes", "")}
                            >Online Demo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Toolbar>
    )
}
