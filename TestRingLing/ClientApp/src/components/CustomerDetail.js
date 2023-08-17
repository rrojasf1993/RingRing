import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CustomerData from './CustomerData';
import CallHistoryGrid from './CallHistoryGrid';
import ContactInfo from './ContactInfo';

import LoadsGrid from './LoadsGrid';
const CustomerDetail = () =>
{
    return(<Tabs>
        <TabList>
            <Tab>Customer</Tab>
            <Tab>Load History</Tab>
            <Tab>Call History</Tab>
            <Tab>Contact Info</Tab>
        </TabList>

        <TabPanel>
            <CustomerData/>
        </TabPanel>
        <TabPanel>
            <LoadsGrid />
        </TabPanel>
        <TabPanel>
           <CallHistoryGrid />
        </TabPanel>
        <TabPanel>
        <ContactInfo />
        </TabPanel>
    </Tabs>)
}
export default CustomerDetail;
