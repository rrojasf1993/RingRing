import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CustomerData from './CustomerData';
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
            <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content 4</h2>
        </TabPanel>
    </Tabs>)
}
export default CustomerDetail;
