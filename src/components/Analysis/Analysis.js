import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";

class Analysis extends Component {

    constructor(){
        super();
        this.state={
            data:[
                {Technology:'Java', Projects:100},
                {Technology:'Sql', Projects:90},
                {Technology:'Bootstrap', Projects:95},
                {Technology:'React', Projects:90},
                {Technology:'PHP', Projects:100}
            ]
        }
    }


    render() {
        var blue="rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>

                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={blue} >
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>


                        </Col>
                        <Col lg={6} md={12} sm={12}>
                        <p className="text-justify des">To build native android apps i use Javamainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>
                            <p className="text-justify des"> I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use Laravel to build admin panel section. </p>
                            <p className="text-justify des"> Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk. </p>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;