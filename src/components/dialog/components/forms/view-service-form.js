import React, { useState } from "react";
import { FormControl, TextField, Button, Select, Menu, MenuItem, InputLabel } from "@material-ui/core";

export default function ViewServiceForm(props) {

    const {  } = props;

    const [anchorEl, setAnchorEl] = useState(0);

    return (
        <div className="dialog-form-demo-cover">
            <div className="dialog-form-demo-cover-flex">
                <div className="dialog-form-demo-cover-item">
                    <div className="form-cover-flex">
                        <div className="form-cover-item">
                            <form className="form-elem-cover" id="form-elem-d" method="" onSubmit="">
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
                                                    variant="outlined"
                                                    type="text"
                                                    label="Company Name"
                                                    aria-label="Company Name"
                                                    onChange={``}
                                                    value={``}
                                                    required
                                                />
                                            </div>
                                            <div className="input-cover-item">
                                                <FormControl className="form-control-cover">
                                                    <InputLabel htmlFor="company-type">Company Type</InputLabel>
                                                    <Select 
                                                        className="form-select-input"
                                                        id="company-type"
                                                        variant="outlined"
                                                        onChange={``}
                                                    >
                                                        <Menu className="menu-cover" anchorEl={anchorEl}>
                                                            <MenuItem className="menu-item-cover" selected></MenuItem>
                                                            <MenuItem className="menu-item-cover" selected={``}>Financial Institution</MenuItem>
                                                            <MenuItem className="menu-item-cover">Fintech Company</MenuItem>
                                                        </Menu>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="input-cover-flex-short">
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="company-email"
                                                    variant="outlined"
                                                    type="email"
                                                    label="Email"
                                                    aria-label="Email"
                                                    onChange={``}
                                                    value={``}
                                                    required
                                                />
                                            </div>
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="scheduled-date"
                                                    variant="outlined"
                                                    type="date"
                                                    onChange={``}
                                                    value={``}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="input-cover-flex-short">
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="company-size"
                                                    variant="outlined"
                                                    type="number"
                                                    label="Company Size"
                                                    aria-label="Company Size"
                                                    onChange={``}
                                                    value={``}
                                                    required
                                                />
                                            </div>
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-input"
                                                    id="customer-base"
                                                    variant="outlined"
                                                    type="number"
                                                    label="Customer Base"
                                                    aria-label="Customer Base"
                                                    onChange={``}
                                                    value={``}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="input-cover-flex-long">
                                            <div className="input-cover-item">
                                                <TextField 
                                                    className="form-text-input"
                                                    id="other-details"
                                                    variant="outlined"
                                                    fullWidth
                                                    multiline
                                                    type="text"
                                                    label="Other Details if Necessary"
                                                    aria-label="Other Details if Necessary"
                                                    onChange={``}
                                                    value={``}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="btn-cover-flex">
                                            <div className="btn-cover-item">
                                                <Button
                                                    className="form-btn"
                                                    type="button"
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
                </div>
            </div>
        </div>
    )
}