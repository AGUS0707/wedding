import React from 'react';

const Instagram = () => {
    return (
        <>
            <div className="instagram">
                <h1>Instagram</h1>

                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-3">
                            <img src="/images/instagram-toyxona.png" alt="instagram-toyxona" className="w-100"/>
                        </div>
                        <div className="col-3">
                            <img src="/images/instagram-toyxona.png" alt="instagram-toyxona" className="w-100"/>
                        </div>
                        <div className="col-3">
                            <img src="/images/instagram-toyxona.png" alt="instagram-toyxona" className="w-100"/>
                        </div>
                        <div className="col"></div>
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                        <div className="d-flex align-items-center">
                            <h3>Follow</h3>
                            <span className="icon icon-right"></span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Instagram;