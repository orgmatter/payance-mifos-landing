import React from 'react';
import { DialogContent, DialogTitle } from '@material-ui/core';
import { dialogProps as DIALOG_PROPS } from '../dialog-props';
import "../../../styles/dialog.scss";

export default function DialogServiceComponent(props) {

    const { componentType } = props;

    const dialogServiceComponents = DIALOG_PROPS.services.find((dialogServiceProp) => dialogServiceProp.componentType === componentType);
    
    return (
        <>
            <DialogTitle className="dialog-title-cover">
                <div className="title-header-cover-flex">
                    <div className="title-header-cover-item">
                        <div className="title-header-content-cover-flex">
                            <div className="title-header-content-cover-item">
                                <div className="title-header">
                                    <h2 className="title-h" dangerouslySetInnerHTML={{__html: dialogServiceComponents && dialogServiceComponents.title}}></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogTitle>
            <DialogContent className="dialog-content-cover dialog-content-cover-service">
                {
                    dialogServiceComponents && (<dialogServiceComponents.serviceContent />)
                }
            </DialogContent>
        </>
    )
}