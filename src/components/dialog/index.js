import React from 'react';
import { Dialog } from '@material-ui/core';
import DialogFormComponent from './components/dialog-form-components';
import DialogServiceComponent from './components/dialog-service-components';
import "../../styles/dialog.scss";

export default function DialogComponent({dialogProps}) {

    const { dialogOpen, handleDialogClose, componentType, dialogType } = dialogProps;
    
    return (
        <>
            {
                dialogType === "form" && (
                    <Dialog 
                        className="dialog-cover" 
                        scroll="paper"
                        open={dialogOpen}
                        onClose={handleDialogClose}
                    >
                        <DialogFormComponent componentType={componentType} handleDialogClose={handleDialogClose} />
                    </Dialog>
                )
            }
            {
                dialogType === "services" && (
                    <Dialog 
                        className="dialog-cover" 
                        scroll="paper"
                        open={dialogOpen}
                        onClose={handleDialogClose}
                    >
                        <DialogServiceComponent componentType={componentType} />
                    </Dialog>
                )
            }
        </>
    )
}