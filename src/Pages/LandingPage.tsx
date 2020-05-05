import React from 'react'
import NavBar from '../Components/NavBar'
import { Card, CardImg, CardText, CardLink, CardBody, CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './LandingPage.css'


const LandingPage = () => {

    return (

        <div>LandingPage
            <Jumbotron>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            <NavBar />
            <Card className="card">
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Otis</CardTitle>
                    <CardSubtitle>Border Collie</CardSubtitle>
                    <CardText>Age: 1 years old, Black, Male, 20 lbs.</CardText>
                    <Button>Apply</Button>
                </CardBody>
            </Card>
        </div>
    )

}

export default LandingPage