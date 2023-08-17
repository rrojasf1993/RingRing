import React, { Component, useState } from 'react';
import CustomerDetail from './CustomerDetail';
import IncomingCall from './IncomingCall';
import VoiceMailCall from './VoiceMailCall';
import { Collapse } from 'reactstrap';


const Home = () => {
  const [ screenData, setScreenData ] = useState({ isOpen: false, component: <CustomerDetail /> })
  return (<>
    <div>
      <div className="row">
        <div className='col-md-4'>
          <IncomingCall voiceMailClick={() => { setScreenData({ isOpen: true, component: <VoiceMailCall /> }) }}
            answerClick={() => { setScreenData({ isOpen: true, component: <CustomerDetail /> }) }}
            ignoreClick={() => { setScreenData({ isOpen: false, component: null }) }} />
        </div>
        <div className='col-md-8'>
          <Collapse horizontal isOpen={screenData.isOpen}>
            {screenData.component}
          </Collapse>
        </div>
      </div>
    </div>
  </>)
}

export default Home;