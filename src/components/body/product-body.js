import React, { useEffect } from 'react';
import { AppBar } from '@material-ui/core';
import {assets} from "../../assets/images";
import { useLocation } from 'react-router-dom';
import { scrollToSectionView } from '../ui-helper';
import "../../styles/services.scss";

export default function ProductBody(props) {

    const {  } = props;

    const { service } = assets;
    const { heroImages, contentImage } = service;
    const { hash } = useLocation();

    useEffect(() => {

        scrollToSectionView(hash);

    }, [hash]);
    
    return (
        <div className="service-body-cover">
            <div className="service-body-cover-flex">
                <div className="service-body-cover-item">
                    <div className="service-hero-cover-flex">
                        <div className="service-hero-cover-item">
                            <div className="hero-cover-flex">
                                <div className="hero-cover-item">
                                    <div className="hero-text-cover-flex">
                                        <div className="hero-text-cover-item">
                                            <h2 className="text-title-h">What we</h2>
                                        </div>
                                        <div className="hero-text-cover-item">
                                            <h2 className="text-title-h">Offer...</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-cover-item">
                                    <div className="hero-img-cover-flex">
                                        <div className="hero-img-cover-item">
                                            <img className="hero-img" src={heroImages[0]} alt="service hero" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-content-cover-flex">
                        <div className="service-content-cover-item">
                            <div className="content-cover-flex" id="mifos-view">
                                <div className="content-cover-item">
                                    <div className="content-img-cover-flex">
                                        <div className="content-img-cover-item">
                                            <img className="content-img" src={contentImage[0]} alt="service content" />
                                        </div>
                                    </div>
                                </div>
                                <div className="content-cover-item divider"></div>
                                <div className="content-cover-item">
                                    <div className="content-text-cover-flex">
                                        <div className="content-text-cover-item">
                                            <h2 className="text-title-h">Installation</h2>
                                        </div>
                                        <div className="content-subtext-cover-item">
                                            <p className="text-subtitle-p">Mifos-x platform has been designed to run and deployed effectively on any device environment, be it cloud based or your local machine such as Windows, Ubuntu, and Mac. So whether you're looking to begin a fresh installation on your current environment, or you're planning to migrate to another one, Paycore is fully equipped to provide the best installation service to get you up and running with Mifos-x in no time!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="content-cover-flex" id="configuration-view">
                                <div className="content-cover-item">
                                    <div className="content-text-cover-flex">
                                        <div className="content-text-cover-item">
                                            <h2 className="text-title-h">Configuration</h2>
                                        </div>
                                        <div className="content-subtext-cover-item">
                                            <p className="text-subtitle-p">As a financial organisation looking to provide an efficient core banking service to your customers, though built to have most of the core functionality that gets you started right out of the box, having the Mifos-x platform on your system doesn't just stop at installation, you may find it very necessary in most cases to perform some configuartions and tunings, like setting the currency module for instance. Your with Paycore gives you the best configuration service which helps to serves the underlying purpose.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-cover-item divider"></div>
                                <div className="content-cover-item">
                                    <div className="content-img-cover-flex">
                                        <div className="content-img-cover-item">
                                            <img className="content-img" src={contentImage[0]} alt="service content" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}