import React from 'react';

const Liboslar = () => {
    return (
        <>

            <div className="liboslar">
                <div className="container">
                    <div className="row">
                        <div className="col-6">

                            <img src="/images/liboslar.png" alt="liboslar" className="w-100"/>

                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-center">
                            <div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="icon icon-libos"></span>
                                </div>
                                <h3>To'y liboslarii</h3>
                                <p>Ajoyib ko‘rinishdagi to‘y va marosimlar o‘tkazish koshanasi.</p>
                                <p>Sizning orzuyingizdai to‘y uchun bizning koshonamiz
                                    xizmatingizga tayyor.</p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="service-all-card">
                                        <span className="icon icon-libos"></span>
                                        <p>To'y liboslari</p>
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

export default Liboslar;