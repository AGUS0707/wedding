import React from 'react';

const Services = () => {
    return (
        <>

            <div className="services">

                <div className="search w-100 d-flex align-items-center justify-content-between">
                    <div className="searchs">
                        <input type="text" className="w-100" placeholder="Qidiruv"/>
                        <span className="icon icon-search"></span>
                    </div>
                    <div className="city">
                        <input type="text" className="w-100" placeholder="Viloyat, shahar"/>
                        <span className="icon icon-location"></span>
                    </div>
                </div>

                <h1>Xizmatlarimiz</h1>
                
                <div className="service-all">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">

                            <div className="service-all-card">
                                <span className="icon icon-toyxona"></span>
                                <p>To'yxonalar</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-taklifnoma"></span>
                                <p>Taklifnomalar</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-gullar"></span>
                                <p>Gullar</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-oshpaz"></span>
                                <p>Oshpazlar</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-bezak"></span>
                                <p>Sahna bezaklari</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-uzuk"></span>
                                <p>Uzuklar</p>
                            </div>

                        </div>
                        <div className="d-flex align-items-center justify-content-between">

                            <div className="service-all-card">
                                <span className="icon icon-sanatkor"></span>
                                <p>San'atkorlar</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-libos"></span>
                                <p>To'y liboslari</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-sozanda"></span>
                                <p>sozandalar</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-montaj"></span>
                                <p>Tasvir montaj</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-studia"></span>
                                <p>Foto studialar</p>
                            </div>

                        </div>
                        <div className="d-flex align-items-center justify-content-between">

                            <div className="service-all-card">
                                <span className="icon icon-mashina"></span>
                                <p>Mashinalar</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-multi"></span>
                                <p>Multi qahramonlar</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-sovga"></span>
                                <p>Sovg'alar</p>
                            </div>
                            <div className="service-all-card">
                                <span className="icon icon-shirinlik"></span>
                                <p>Shirinliklar</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Services;