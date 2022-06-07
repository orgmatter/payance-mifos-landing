import React, { useState, useEffect } from "react";
import { FormControl, TextField, DateField, Button, Select, Menu, MenuItem, InputLabel, Box, CircularProgress } from "@material-ui/core";
import { assets } from '../../../../assets/images';

export default function RequestDemoForm(props) {

    const { handleDialogClose } = props ;

    const [inputObj, setInputObj] = useState({
        companyName: { val: "" },
        companyType: { val: "" },
        companySize: { val: "" },
        companyLoc: { val: "" },
        customerBase: { val: "" },
        companyEmail: { val: "" },
        scheduledDate: { val: "" },
        otherDetails: { val: "" }
    });

    const [mailStatus, setMailStatus] = useState(null);

    const handleInputChange = (e) => {

        e.preventDefault();
        var inputObjKey = e.target.name;
        var inputObjVal = e.target.value;

        setInputObj(inputObj => ({
            ...inputObj,
            [inputObjKey]: {
                val: inputObjVal
            }
        }))
    }

    const handleFormSubmit = (e) => {
        
        e.preventDefault();

        setMailStatus('start')

        const requestDemoObj = {
            companyName: inputObj.companyName.val,
            companyType: inputObj.companyType.val,
            companySize: inputObj.companySize.val,
            companyLoc: inputObj.companyLoc.val,
            customerBase: inputObj.customerBase.val,
            companyEmail: inputObj.companyEmail.val,
            scheduledDate: inputObj.scheduledDate.val,
            otherDetails: inputObj.otherDetails.val
        }

        fetch('http://localhost:3000/api/request-demo', {
            method: 'post',
            body: JSON.stringify(requestDemoObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resp => {
            
            setMailStatus(resp.status);
            console.log('Status: ', resp.status)
        })
        .catch(err => {
            setMailStatus(null);
            console.log('Status: ', err.message)
        })
    }

    useEffect(() => {


    }, [mailStatus]);

    const { homepage } = assets;
    const { contactImages } = homepage;


    const getContent = (status) => {
        
        switch(status) {
            case 'start':
                return (
                    <div className="mail-status-cover-flex">
                        <div className="mail-status-cover-item">
                            <div className="status-loader-cover-flex">
                                <div className="status-loader-cover-item">
                                    <Box className="loader-box-cover">
                                        <CircularProgress style={{color: "rgb(28, 36, 43)", width: "55px"}} />
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 'success':
                return (
                    <div className="mail-status-cover-flex">
                        <div className="mail-status-cover-item">
                            <div className="status-image-cover-flex">
                                <div className="status-image-cover-item">
                                    <div className="image-cover-flex">
                                        <div className="image-cover-item">
                                            <img className="status-img" src={contactImages[0]} alt="status image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="status-text-cover-flex">
                                <div className="status-text-cover-item">
                                    <h2 className="status-text">Thank you for your interest in exploring the Mifos-x core banking platform, your request has been received, and our team will prepare to have a session with you as scheduled!</h2>
                                </div>
                            </div>
                            <div className="status-btn-cover-flex">
                                <div className="status-btn-cover-item">
                                    <Button 
                                        className="status-btn" 
                                        variant="contained"
                                        color="primary"
                                        onClick={handleDialogClose}
                                    >Close</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case null:
                return (
                    <div className="form-cover-flex">
                        <div className="form-cover-item">
                            <form className="form-elem-cover" id="form-elem-d" method="" onSubmit={handleFormSubmit}>
                                <div className="form-title-cover-flex">
                                    <div className="form-title-cover-item"></div>
                                </div>
                                <div className="form-input-cover-flex">
                                    <div className="form-input-cover-item">
                                        <div className="input-cover-flex-short">
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="company-name"
                                                    name="companyName"
                                                    variant="outlined"
                                                    type="text"
                                                    label="Company Name"
                                                    aria-label="Company Name"
                                                    onChange={handleInputChange}
                                                    value={inputObj.companyName.val}
                                                    required
                                                />
                                            </div>
                                            <div className="input-cover-item">
                                                <FormControl className="form-control-cover">
                                                    <Select 
                                                        className="form-select-input"
                                                        name="companyType"
                                                        variant="outlined"
                                                        onChange={handleInputChange}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                        value={inputObj.companyType.val}
                                                    >
                                                        <MenuItem className="menu-item-cover" value=""><em>Choose a Company Type</em></MenuItem>
                                                        <MenuItem className="menu-item-cover" value={`Financial Institution`}>Financial Institution</MenuItem>
                                                        <MenuItem className="menu-item-cover" value={`Fintech Company`}>Fintech Company</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="input-cover-flex-short">
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="company-size"
                                                    name="companySize"
                                                    variant="outlined"
                                                    type="number"
                                                    label="Company Size"
                                                    aria-label="Company Size"
                                                    onChange={handleInputChange}
                                                    value={inputObj.companySize.val}
                                                    required
                                                />
                                            </div>
                                            <div className="input-cover-item">
                                                <FormControl className="form-control-cover">
                                                    <Select 
                                                        className="form-select-input"
                                                        id="company-location"
                                                        name="companyLoc"
                                                        labelId="company-location-choice"
                                                        variant="outlined"
                                                        onChange={handleInputChange}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                        value={inputObj.companyLoc.val}
                                                    >
                                                        <MenuItem className="menu-item-cover" value=""><em>Company Location</em></MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Lagos">Lagos</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Abuja FCT">Abuja FCT</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Enugu">Enugu</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Portharcourt">Portharcourt</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Asaba">Asaba</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Onitsha">Onitsha</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Warri">Warri</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Jos">Jos</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Kaduna">Kaduna</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="input-cover-flex-short">
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="customer-base"
                                                    name="customerBase"
                                                    variant="outlined"
                                                    type="number"
                                                    label="Customer Base"
                                                    aria-label="Customer Base"
                                                    onChange={handleInputChange}
                                                    value={inputObj.customerBase.val}
                                                    required
                                                />
                                            </div>
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="company-email"
                                                    name="companyEmail"
                                                    variant="outlined"
                                                    type="email"
                                                    label="Email"
                                                    aria-label="Email"
                                                    onChange={handleInputChange}
                                                    value={inputObj.companyEmail.val}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="input-cover-flex-long">
                                            <div className="input-cover-item">
                                                <InputLabel htmlFor="scheduled-date">Scheduled Date *</InputLabel>
                                                <TextField 
                                                    className="form-input"
                                                    id="scheduled-date"
                                                    name="scheduledDate"
                                                    variant="outlined"
                                                    type="date"
                                                    onChange={handleInputChange}
                                                    value={inputObj.scheduledDate.val}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="input-cover-flex-long">
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-text-input"
                                                    id="other-details"
                                                    name="otherDetails"
                                                    variant="outlined"
                                                    fullWidth
                                                    multiline
                                                    type="text"
                                                    label="Other Details if Necessary"
                                                    aria-label="Other Details if Necessary"
                                                    onChange={handleInputChange}
                                                    value={inputObj.otherDetails.val}
                                                />
                                            </div>
                                        </div>
                                        <div className="btn-cover-flex">
                                            <div className="btn-cover-item">
                                                <Button
                                                    className="form-btn"
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                >Request Demo</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form> 
                        </div>
                    </div>
                )
            default:
                return (
                    <div className="form-cover-flex">
                        <div className="form-cover-item">
                            <form className="form-elem-cover" id="form-elem-d" method="" onSubmit={handleFormSubmit}>
                                <div className="form-title-cover-flex">
                                    <div className="form-title-cover-item"></div>
                                </div>
                                <div className="form-input-cover-flex">
                                    <div className="form-input-cover-item">
                                        <div className="input-cover-flex-short">
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="company-name"
                                                    name="companyName"
                                                    variant="outlined"
                                                    type="text"
                                                    label="Company Name"
                                                    aria-label="Company Name"
                                                    onChange={handleInputChange}
                                                    value={inputObj.companyName.val}
                                                    required
                                                />
                                            </div>
                                            <div className="input-cover-item">
                                                <FormControl className="form-control-cover">
                                                    <Select 
                                                        className="form-select-input"
                                                        name="companyType"
                                                        variant="outlined"
                                                        onChange={handleInputChange}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                        value={inputObj.companyType.val}
                                                    >
                                                        <MenuItem className="menu-item-cover" value=""><em>Choose a Company Type</em></MenuItem>
                                                        <MenuItem className="menu-item-cover" value={`Financial Institution`}>Financial Institution</MenuItem>
                                                        <MenuItem className="menu-item-cover" value={`Fintech Company`}>Fintech Company</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="input-cover-flex-short">
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="company-size"
                                                    name="companySize"
                                                    variant="outlined"
                                                    type="number"
                                                    label="Company Size"
                                                    aria-label="Company Size"
                                                    onChange={handleInputChange}
                                                    value={inputObj.companySize.val}
                                                    required
                                                />
                                            </div>
                                            <div className="input-cover-item">
                                                <FormControl className="form-control-cover">
                                                    <Select 
                                                        className="form-select-input"
                                                        id="company-location"
                                                        name="companyLoc"
                                                        labelId="company-location-choice"
                                                        variant="outlined"
                                                        onChange={handleInputChange}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                        value={inputObj.companyLoc.val}
                                                    >
                                                        <MenuItem className="menu-item-cover" value=""><em>Company Location</em></MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Lagos">Lagos</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Abuja FCT">Abuja FCT</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Enugu">Enugu</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Portharcourt">Portharcourt</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Asaba">Asaba</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Onitsha">Onitsha</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Warri">Warri</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Jos">Jos</MenuItem>
                                                        <MenuItem className="menu-item-cover" value="Kaduna">Kaduna</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="input-cover-flex-short">
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="customer-base"
                                                    name="customerBase"
                                                    variant="outlined"
                                                    type="number"
                                                    label="Customer Base"
                                                    aria-label="Customer Base"
                                                    onChange={handleInputChange}
                                                    value={inputObj.customerBase.val}
                                                    required
                                                />
                                            </div>
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="company-email"
                                                    name="companyEmail"
                                                    variant="outlined"
                                                    type="email"
                                                    label="Email"
                                                    aria-label="Email"
                                                    onChange={handleInputChange}
                                                    value={inputObj.companyEmail.val}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="input-cover-flex-long">
                                            <div className="input-cover-item">
                                                <InputLabel htmlFor="scheduled-date">Scheduled Date *</InputLabel>
                                                <TextField 
                                                    className="form-input"
                                                    id="scheduled-date"
                                                    name="scheduledDate"
                                                    variant="outlined"
                                                    type="date"
                                                    onChange={handleInputChange}
                                                    value={inputObj.scheduledDate.val}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="input-cover-flex-long">
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-text-input"
                                                    id="other-details"
                                                    name="otherDetails"
                                                    variant="outlined"
                                                    fullWidth
                                                    multiline
                                                    type="text"
                                                    label="Other Details if Necessary"
                                                    aria-label="Other Details if Necessary"
                                                    onChange={handleInputChange}
                                                    value={inputObj.otherDetails.val}
                                                />
                                            </div>
                                        </div>
                                        <div className="btn-cover-flex">
                                            <div className="btn-cover-item">
                                                <Button
                                                    className="form-btn"
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                >Request Demo</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form> 
                        </div>
                    </div>
                )
        }
    }
    
    return (
        <div className="dialog-form-demo-cover">
            <div className="dialog-form-demo-cover-flex">
                <div className="dialog-form-demo-cover-item">
                    {
                        getContent(mailStatus)
                    }
                </div>
            </div>
        </div>
    )
}