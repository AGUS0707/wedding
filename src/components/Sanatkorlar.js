import React from 'react';

const Sanatkorlar = () => {
    return (
        <>
            <div className="sanatkorlar">

                <h1>San'atkorlar</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-3">

                            <div className="card">
                                <img src="/images/davron.png" alt="davron"/>
                                <div className="p-3">
                                    <h3>Davron Kabulov</h3>
                                    <p>Boshlovchii</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-3">

                            <div className="card">
                                <img src="/images/munisa.png" alt="munisa"/>
                                <div className="p-3">
                                    <h3>Munisa Rizayeva</h3>
                                    <p>San'atkor</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-3">

                            <div className="card">
                                <img src="/images/sardor.png" alt="sardor"/>
                                <div className="p-3">
                                    <h3>Sardfor Mamadaliyev</h3>
                                    <p>San'atkor</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-3">

                            <div className="card">
                                <img src="/images/via.png" alt="via"/>
                                <div className="p-3">
                                    <h3>Via Marokand</h3>
                                    <p>San'atkorlar</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="service-all-card">
                            <span className="icon icon-sanatkor"></span>
                            <p>San'atkorlar</p>
                        </div>
                        <div className="service-all-card">
                            <span className="icon icon-sozanda"></span>
                            <p>Sozandalar</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Sanatkorlar;