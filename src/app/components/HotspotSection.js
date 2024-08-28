import React from 'react'

function HotspotSection() {
    return (
        <>
            <div className="container-fluid hotspotSection">
                <div className="row">
                    <div className="col-md-8">
                        <div className="mapContainer">
                            <img src="/images/worldMap.png" alt="World Map" className="mapImage" />
                            {/* Hotspot Markers */}
                            <div className="hotspot" style={{ top: '0%', left: '26%' }}>
                                <div className="label">
                                    <h6>USA</h6>
                                    <p>82 King Street, Manchester, <br /> Lancashire, M2 4WQ, United<br /> Kingdom</p>
                                </div>
                                <div className="marker"></div>
                            </div>
                            <div className="hotspot" style={{ top: '-6%', left: '56%' }}>
                                <div className="label">
                                    <h6>UK</h6>
                                    <p>82 King Street, Manchester, <br /> Lancashire, M2 4WQ, United Kingdom</p>
                                </div>
                                <div className="marker"></div>
                            </div>
                            <div className="hotspot" style={{ top: '17%', left: '74%' }}>
                                <div className="label">
                                    <h6>PAK</h6>
                                    <p>82 King Street, Manchester, <br /> Lancashire, M2 4WQ, United Kingdom</p>
                                </div>
                                <div className="marker"></div>
                            </div>
                            <div className="hotspot" style={{ top: '38%', left: '38%' }}>
                                <div className="label">
                                    <h6>UAE</h6>
                                    <p>82 King Street, Manchester, <br /> Lancashire, M2 4WQ, United<br /> Kingdom</p>
                                </div>
                                <div className="marker"></div>
                            </div>
                            <div className="hotspot" style={{ top: '50%', left: '62%' }}>
                                <div className="label">
                                    <h6 style={{ width: '100px' }}>AUSTRALIA</h6>
                                    <p>82 King Street, Manchester, <br /> Lancashire, M2 4WQ, United<br /> Kingdom</p>
                                </div>
                                <div className="marker"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <div className="contactContainer">
                            <h2 className='fw-bold'>Let's Start Working Together. Get In Touch!</h2>
                            <a href="#" className="btn">Make An Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotspotSection