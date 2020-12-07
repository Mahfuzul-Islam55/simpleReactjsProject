import React, {Component, Fragment} from 'react';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import {Container,Row,Col,Button} from "react-bootstrap";
class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0" >
                    <div className="topBannerOverlay">
                       <Container className="topContent">
                           <Row>
                               <Col className="text-center">
                                    <h1 className="topTitle">SOFTWARE ENGINEER</h1>
                                   <h4 className="topSubTitle">Web Application</h4>
                                   <Button variant="primary">More Info</Button>
                               </Col>
                           </Row>
                       </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}
export default TopBanner;