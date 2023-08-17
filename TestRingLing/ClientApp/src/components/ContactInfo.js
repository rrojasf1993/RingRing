import React, { Component } from 'react';
import { Table } from 'reactstrap';

const ContactInfo = () => {
    return (<>
        <div className="row">
            <h2> Bradley Richardson</h2>
            <h5> Senior Manager of Truckload and Intermodal</h5>
            <h5 style={{ 'color': 'gray' }}> Department: Transportation</h5>
            {/* <a href="#">View Full History</a> */}
        </div>
        <hr></hr>
        <div className="row">
            <h5>Office: <span style={{ 'fontWeight': 'normal' }}>567-865-0978</span></h5>
            <h5>Cell: <span style={{ 'fontWeight': 'normal' }}>444-789-2436</span></h5>
            <h5>Contact Created: <span style={{ 'fontWeight': 'normal' }}>April 15, 2022</span></h5>
            {/* <a href="#">View Full History</a> */}
        </div>
        <div className="row">
            <div className="col">
                <img src="https://th.bing.com/th/id/R.a8fbb7dd4338480fc0f29d78375994bb?rik=uovY7DoomLCYXw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fletter-png-big-image-png-2400.png&ehk=C4gR%2bU0pBkTI5moKfEGFAQerMguNcEQaCUdK2w97iOk%3d&risl=&pid=ImgRaw&r=0"
                    style={{ 'height': '25px', 'width': '25px' }}></img>
                &nbsp;&nbsp;<a href='#'>brad.richardson@westrock.com</a>
            </div>
            <div className="col">
                <img src="https://th.bing.com/th/id/R.56bd08b27359698ddcc6606d3ad4aaa8?rik=mEpSf8RXfK%2fQfg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-location-free-icons-png-location-icon-png-2555.png&ehk=rl25ggIQhjUB6s8%2fLCEbuLxKj4mAYyPUYMMFmx%2ffoFE%3d&risl=&pid=ImgRaw&r=0"
                    style={{ 'height': '29px', 'width': '20px' }}></img>
                &nbsp;&nbsp;
                <span>Atlanta, GA</span>
            </div>
        </div>
        <hr></hr>
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <span style={{'font-size': '20px'}}>TOTAL CALLS</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span style={{'font-size': '25px', 'font-weight': 'bold'}}>12</span>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col" style={{'border-left': '6px blue solid','margin-left': '15px'}}>
                        <span style={{'font-size': '20px'}}>TOTAL TALK TIME</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{'border-left': '6px blue solid','margin-left': '15px'}}>
                        <span style={{'font-size': '25px', 'font-weight': 'bold'}}>32 Min</span>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default ContactInfo;