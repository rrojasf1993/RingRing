
import { CardBody, Card, CardText, CardTitle, CardSubtitle,Button} from "reactstrap";

const IncomingCall=(props)=>{
    return (<Card
        style={{
            width: '18rem'
        }}
    >
        <div style={{'width':'100%', 'margin-top': '15%'}}>
        <img style={{'border-radius': '150px', 'width': '200px'}}
            alt="Sample"
            className="custom-center "
            src="https://picsum.photos/200"
        />
        </div>
        
        <CardBody>
            <CardTitle tag="h5" style={{'text-align': 'center','margin-top': '20px'}}>
               John Doe
    </CardTitle>
            <CardSubtitle style={{'text-align': 'center'}}
                className="mb-2 text-muted"
                tag="h6"
            >
                Lead Cargo Tracker
                
    </CardSubtitle>
            <CardText style={{'text-align': 'center','margin-bottom': '40px'}}>
                <b> Coca Cola Inc</b>
    </CardText>
            <div className="row">
                <div className="col-md-4">
                    <Button color ="info" className="custom-rounded-button">Forward</Button>
                </div>
                <div className="col-md-4">
                    <Button color="secondary" className="custom-rounded-button">Reply</Button>
                </div>
                <div className="col-md-4">
                    <Button color="danger" className="custom-rounded-button"
                    onClick={props.ignoreClick}>Ignore</Button>
                </div>

            </div>
            <div className="row">
                <div className="col-md-6">
                    <Button color="warning" className="custom-rounded-button custom-float-right"
                    onClick={props.voiceMailClick}>Voice Mail</Button>
                </div>
                <div className="col-md-6">
                    <Button color="success" className="custom-rounded-button"
                    onClick={props.answerClick}>Answer</Button>
                </div>

            </div>

            </CardBody>
    </Card>)
}

export default IncomingCall