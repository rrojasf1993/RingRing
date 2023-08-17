
import { CardBody, Card, CardText, CardTitle, CardSubtitle,Button} from "reactstrap";

const IncomingCall=()=>{
    return (<Card
        style={{
            width: '18rem'
        }}
    >
        <img
            alt="Sample"
            src="https://picsum.photos/200"
        />
        <CardBody>
            <CardTitle tag="h5">
               John Doe
    </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Lead Cargo Tracker
                
    </CardSubtitle>
            <CardText>
                <b> Coca Cola Inc</b>
    </CardText>
            <div className="row">
                <div className="col-md-4">
                    <Button color ="info">Forward</Button>
                </div>
                <div className="col-md-4">
                    <Button color="secondary">Reply</Button>
                </div>
                <div className="col-md-4">
                    <Button color="danger">Ignore</Button>
                </div>

            </div>
            <div className="row">
                <div className="col-md-6">
                    <Button color="warning">Voice Mail</Button>
                </div>
                <div className="col-md-6">
                    <Button color="success">Answer</Button>
                </div>

            </div>

            </CardBody>
    </Card>)
}

export default IncomingCall