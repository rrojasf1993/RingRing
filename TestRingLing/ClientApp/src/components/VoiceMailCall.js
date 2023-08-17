import { CardBody, Card, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";
const VoiceMailCall = () => {
    return (<Card
        style={{
            width: '18rem'
        }}
    >
        <div style={{ 'width': '100%', 'margin-top': '15%' }}>
            <img style={{ 'border-radius': '150px', 'width': '200px' }}
                alt="Sample"
                className="custom-center "
                src="https://picsum.photos/200"
            />
        </div>

        <CardBody>
            <CardTitle tag="h5" style={{ 'text-align': 'center', 'margin-top': '20px' }}>
                John Doe
    </CardTitle>
            <CardSubtitle style={{ 'text-align': 'center' }}
                className="mb-2 text-muted"
                tag="h6"
            >
                Lead Cargo Tracker
                
    </CardSubtitle>
            <CardText style={{ 'text-align': 'center', 'margin-bottom': '40px' }}>
                <b> Coca Cola Inc</b>
            </CardText>
            <div className="row">
              <b>Call Sent to voicemail</b>
            </div>
           

        </CardBody>
    </Card>)
}
export default VoiceMailCall