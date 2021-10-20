import React from 'react';

const Saroy = () => {
    return (
        <>
            <div className="saroy">

                <div className="container">
                    <div className="row">
                        <div className="col-6">

                            <img src="/images/saroy.png" alt="saroy" className="w-100"/>

                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-center">
                            <div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="icon icon-toyxona"></span>
                                </div>
                                <h3>Tantanalar saroyi</h3>
                                <p>Ajoyib ko‘rinishdagi to‘y va marosimlar o‘tkazish koshanasi.</p>
                                <p>Sizning orzuyingizdai to‘y uchun bizning koshonamiz
                                    xizmatingizga tayyor.</p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="service-all-card">
                                        <span className="icon icon-toyxona"></span>
                                        <p>To'yxonalar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Saroy;