import { Button ,Card, CardHeader, CardBody, CardTitle, CardText, CardFooter} from 'reactstrap';

const CustomerData = () =>
{
    return (<div>


        <Card
            className="my-2"

        >
            <CardHeader>
                <Button color="success" disabled> Active </Button>
  </CardHeader>
            <CardBody>
                <CardTitle tag="h5">
                    <b>Coca Cola Inc.</b>
    </CardTitle>
                <CardText>
                    <p>CC:CC1 | <a href="#">See full customer</a></p>
                    <hr></hr>
                    <b>Sales Rep:</b> Jane Doe
                    <div className="row">
                    <div className="col-md-4">Atlanta, MX</div>
                        <div className="col-md-4"><a href="#">A Website</a></div>
                        <div className="col-md-4">000 -00 00</div>

                    </div>
    </CardText>
                
            </CardBody>
            <CardFooter>
            <div className="row">
               
                    <div className="col-md-6">All Time Volume</div>
                    <div className="col-md-6">Last Shipment</div>
                    <div className="col-md-6">1.234 Kg</div>
                    <div className="col-md-6">April 11, 2023</div>
                </div>
                <div className="row">

                    <div className="col-md-6">Total Calls</div>
                    <div className="col-md-6">Total Talk Time</div>
                    <div className="col-md-6">12</div>
                    <div className="col-md-6">20 min 30s</div>
                </div>
            </CardFooter>
        </Card>
    </div>)
}
export default CustomerData