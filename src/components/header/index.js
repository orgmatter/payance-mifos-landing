import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import HeaderToolbar from './header-toolbar';
import { useLocation } from 'react-router-dom';
import "../../styles/header.scss";

export default function Header(props) {

    const { dialogComponentProps } = props;

    const routeLocationProps = useLocation();

    const handleAppbarScroll = (e) => {

        alert(e.target)

        var appbarElem = e.tagret;
        appbarElem.style.backgroundColor = "rgba(0, 90, 122, 1)";
    }

    return (
        <Box 
            className="header-box-cover"
            sx={{flexGrow: 1}}
        >
            <AppBar position="fixed" className="header-appbar-cover" elevation={0} onScroll={handleAppbarScroll}>
                <HeaderToolbar dialogComponentProps={dialogComponentProps} routeLocationProps={routeLocationProps} />
            </AppBar>
        </Box>
    )
}