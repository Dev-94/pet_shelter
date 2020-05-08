import React, { useState } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Jumbotron, Nav, Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import './LandingPage.css'
import otis from '../images/otis.jpeg'
import dana from '../images/dana.jpeg'
import GoldRush from '../images/GoldRush.jpeg'
import kline from '../images/kline.jpeg'
import rio from '../images/rio.jpeg'
import cosette from '../images/cosette.jpeg'

const LandingPage = () => {

    // const [viewClicked, setViewClicked] = useState('')

    return (

        <div>
            <Jumbotron>
                <h1 className="display-3">Pet Shelter!</h1>
                <p className="lead">This is a pet shelter. If you are interested in adopting a pet please submit an application. Within 48 hours you will recieve a response.</p>
                <hr className="my-2" />
                <p>Please find your new pet below.</p>
                <p className="lead">
                    <Link className="link" to="/about">About</Link>
                </p>
            </Jumbotron>
            <Container className="Cards">
                <Col>

                </Col>
                <Row>
                    <Col>
                        <Card className="card">
                            <CardImg top width="100%" src={otis} alt="Otis" />
                            <CardBody>
                                <CardTitle>Otis</CardTitle>
                                <hr />
                                <CardSubtitle>Border Collie</CardSubtitle>
                                <CardText>Age: 1 years old, Black, Male, 20 lbs.</CardText>
                                <Link className="link" to="/apply">Apply</Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <CardImg top width="100%" src={dana} alt="Dana" />
                            <CardBody>
                                <CardTitle>Dana</CardTitle>
                                <hr />
                                <CardSubtitle>Domestic Shorthair</CardSubtitle>
                                <CardText>Age: 3 years old, Black, Female, 7 lbs.</CardText>
                                <Link className="link" to="/apply">Apply</Link>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className="card">
                            <CardImg top width="100%" src={rio} alt="Rio" />
                            <CardBody>
                                <CardTitle>Rio</CardTitle>
                                <hr />
                                <CardSubtitle>Great Dane</CardSubtitle>
                                <CardText>Age: 4 years old, White, Male, 77 lbs.</CardText>
                                <Link className="link" to="/apply">Apply</Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <CardImg top width="100%" src={GoldRush} alt="Gold Rush" />
                            <CardBody>
                                <CardTitle>Gold Rush</CardTitle>
                                <hr />
                                <CardSubtitle>Domestic Shorthair</CardSubtitle>
                                <CardText>Age: 2 years old, Calico, Female, 5 lbs.</CardText>
                                <Link className="link" to="/apply">Apply</Link>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Card className="card">
                            <CardImg top width="100%" src={kline} alt="Kline" />
                            <CardBody>
                                <CardTitle>Kline</CardTitle>
                                <hr />
                                <CardSubtitle>Cattle Dog</CardSubtitle>
                                <CardText>Age: 3 years old, White/Brown, Male, 45 lbs.</CardText>
                                <Link className="link" to="/apply">Apply</Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <CardImg top width="100%" src={cosette} alt="Cosette" />
                            <CardBody>
                                <CardTitle>Cosette</CardTitle>
                                <hr />
                                <CardSubtitle>Domestic Shorthair</CardSubtitle>
                                <CardText>Age: 10 years old, Black, Female, 6 lbs.</CardText>
                                <Link className="link" to="/apply">Apply</Link>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
                <Col>

                </Col>
            </Container>
        </div>
    )

}

export default LandingPage