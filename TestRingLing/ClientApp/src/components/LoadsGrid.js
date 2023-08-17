import React, { Component } from 'react';
import { Table } from 'reactstrap';

const LoadsGrid = () => {
    return (<>
        <div className="row">
            <h2> Last 50 Loads</h2>
            <a href="#">View Full History</a>
        </div>
        <div className="row">
            <Table striped>
                <thead>
                    <tr>
                        <th>
                            Load ID
                        </th>
                        <th>
                            Mode
                        </th>
                        <th>
                            Pickup
                        </th>
                        <th>
                            Delivery
                        </th>
                        <th>
                            Equipment Type
                        </th>

                        <th>
                            Revenue Cost
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                        Wed, Aug 16, 09:00 EDT
                        </td>
                        <td>
                            Reefer
                        </td>
                        <td>
                            $ 4,566
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            2
                        </th>
                        <td>
                            Jacob
                        </td>
                        <td>
                            Thornton
                        </td>
                        <td>
                        Wed, Aug 17, 09:56 EDT
                        </td>
                        <td>
                            Reefer
                        </td>
                        <td>
                            $ 2,689
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            3
                        </th>
                        <td>
                            Larry
                        </td>
                        <td>
                            the Bird
                        </td>
                        <td>
                        Wed, Aug 18, 09:12 EDT
                        </td>
                        <td>
                            Van
                        </td>
                        <td>
                            $ 7,687
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </>)
}

export default LoadsGrid;