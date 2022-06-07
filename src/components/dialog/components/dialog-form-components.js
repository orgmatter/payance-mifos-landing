import React from 'react';
import { DialogContent, DialogTitle } from '@material-ui/core';
import { dialogProps as DIALOG_PROPS } from '../dialog-props';
import "../../../styles/dialog.scss";

export default function DialogFormComponent(props) {

    const { handleDialogClose, componentType } = props;

    const dialogFormComponents = DIALOG_PROPS.forms.find((dialogFormProp) => dialogFormProp.componentType === componentType);
    
    return (
        <>
            <DialogTitle className="dialog-title-cover">
                <div className="title-header-cover-flex">
                    <div className="title-header-cover-item">
                        <div className="title-header-content-cover-flex">
                            <div className="title-header-content-cover-item">
                                <div className="title-header">
                                    <h2 className="title-h" dangerouslySetInnerHTML={{__html: dialogFormComponents && dialogFormComponents.title}}></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogTitle>
            <DialogContent className="dialog-content-cover dialog-content-cover-form">
                {
                    dialogFormComponents && (<dialogFormComponents.formContent handleDialogClose={handleDialogClose} />)
                }
            </DialogContent>
        </>
    )
}