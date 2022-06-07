import React from 'react';
import { HomepageBody } from '../components/body';
import { useLocation, useMatch, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "../styles/homepage.scss";

export default function Homepage({pageRoute, dialogComponentProps}) {

    // const { ...pageRoute } = pageRoute;
    const pageRouteProps = {
        ...pageRoute
    }

    return (
        <div className="homepage-cover">
            <div className="homepage-cover-flex">
                <div className="homepage-cover-item">
                    <div className="homepage-content-flex">
                        <div className="homepage-content-item">
                            <HomepageBody dialogComponentProps={dialogComponentProps} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}