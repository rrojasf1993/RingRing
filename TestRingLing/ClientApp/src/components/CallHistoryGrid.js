import React, { Component } from 'react';
import { Table } from 'reactstrap';

const CallHistoryGrid = () => {
    return (<>
        <div className="row">
            <h2> Customer Call History</h2>
            {/* <a href="#">View Full History</a> */}
        </div>
        <div className="row">
            <Table striped>
                <thead>
                    <tr>
                        <th>
                            CALLER
                        </th>
                        <th>
                            RECEIVER
                        </th>
                        <th>
                            CALL STATUS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row" colSpan={3}>
                            <table style={{ 'width': '100%' }}>
                                <tr>
                                    <td>
                                        <span style={{ 'font-weight': 'bold !important' }}>Bradley Richardson</span><br></br>
                                        <span>Cell: 888-222-3333</span><br></br>
                                        <a href='#'>View Call Notes</a>
                                    </td>
                                    <td>
                                        Bernardo Luis
                                    </td>
                                    <td>
                                        <span style={{ 'font-weight': 'bold !important' }}>Connected</span><br></br>
                                        <span>Wed, Aug 16, 09:00 EDT</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan={3}>
                            <table style={{ 'width': '100%' }}>
                                <tr>
                                    <td>
                                        <span style={{ 'font-weight': 'bold !important' }}>Bradley Richardson</span><br></br>
                                        <span>Cell: 888-222-3333</span><br></br>
                                        <a href='#'>View Call Notes</a>
                                    </td>
                                    <td>
                                        Bernardo Luis
                                    </td>
                                    <td>
                                        <span style={{ 'font-weight': 'bold !important' }}>Connected</span><br></br>
                                        <span>Wed, Aug 16, 09:00 EDT</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan={3}>
                            <table style={{ 'width': '100%' }}>
                                <tr>
                                    <td>
                                        <span style={{ 'font-weight': 'bold !important' }}>Bradley Richardson</span><br></br>
                                        <span>Cell: 888-222-3333</span><br></br>
                                        <a href='#'>Hide Call Notes</a>
                                    </td>
                                    <td>
                                        Bernardo Luis
                                    </td>
                                    <td>
                                        <span style={{ 'font-weight': 'bold !important' }}>Connected</span><br></br>
                                        <span>Wed, Aug 16, 09:00 EDT</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>
                                        <span style={{'margin-top':'10px'}}>
                                        Spoke with Samanta about the Q3 RFP and why we did not win as much in past qrts.
                                        She said our rates were high and she trusted the service of the lower carrier rates.
                                        Most likely CH, TQL. We will try abain next qtr.
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan={3}>
                            <table style={{ 'width': '100%' }}>
                                <tr>
                                    <td>
                                        <span style={{ 'font-weight': 'bold !important' }}>Bradley Richardson</span><br></br>
                                        <span>Cell: 888-222-3333</span><br></br>
                                        <a href='#'>View Call Notes</a>
                                    </td>
                                    <td>
                                        Bernardo Luis
                                    </td>
                                    <td>
                                        <span style={{ 'font-weight': 'bold !important' }}>Connected</span><br></br>
                                        <span>Wed, Aug 16, 09:00 EDT</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row" colSpan={3}>
                            <table style={{ 'width': '100%' }}>
                                <tr>
                                    <td>
                                        <span style={{ 'font-weight': 'bold !important' }}>Bradley Richardson</span><br></br>
                                        <span>Cell: 888-222-3333</span><br></br>
                                        <a href='#'>View Call Notes</a>
                                    </td>
                                    <td>
                                        Bernardo Luis
                                    </td>
                                    <td>
                                        <span style={{ 'font-weight': 'bold !important' }}>Connected</span><br></br>
                                        <span>Wed, Aug 16, 09:00 EDT</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </>)
}

export default CallHistoryGrid;