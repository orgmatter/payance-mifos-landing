import React, { useEffect } from 'react';
import {assets} from "../../../assets/images";
import { useLocation } from 'react-router-dom';
import { scrollToSectionView } from '../../ui-helper';

export default function ServiceTypes(props) {

    const {  } = props;

    const { service } = assets;
    const { contentImage } = service;
    const { hash } = useLocation();

    useEffect(() => {

        scrollToSectionView(hash);

    }, [hash]);

    return (
        <>
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
                            <h2 className="text-title-h">Mifos-x core banking platform</h2>
                        </div>
                        <div className="content-subtext-cover-item">
                            <p className="text-subtitle-p">Mifos-x platform has been designed to run and deployed effectively on any device environment, be it cloud based or your local machine such as Windows, Ubuntu, and Mac. So whether you're looking to begin a fresh installation on your current environment, or you're planning to migrate to another one, Paycore is fully equipped to provide the best installation service to get you up and running with Mifos-x in no time!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-cover-flex" id="infoware-view">
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
                            <h2 className="text-title-h">Infoware investment management platform.</h2>
                        </div>
                        <div className="content-subtext-cover-item">
                            <p className="text-subtitle-p">Mifos-x platform has been designed to run and deployed effectively on any device environment, be it cloud based or your local machine such as Windows, Ubuntu, and Mac. So whether you're looking to begin a fresh installation on your current environment, or you're planning to migrate to another one, Paycore is fully equipped to provide the best installation service to get you up and running with Mifos-x in no time!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}