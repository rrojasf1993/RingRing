import React, { Component } from 'react';
import CustomerDetail from './CustomerDetail';
import IncomingCall from './IncomingCall';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div className="row">
          <div className='col-md-4'>
          <IncomingCall/>
          </div>
                <div className='col-md-8'>
              <CustomerDetail/>
          </div>
        </div>
       </div>
    );
  }
}
