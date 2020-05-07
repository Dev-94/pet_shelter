import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Listings from '../Components/Listings'
import { Card, CardImg, CardText, CardLink, CardBody, CardTitle, CardSubtitle, Button, Jumbotron, Nav } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './LandingPage.css'
import otis from '../images/otis.jpeg'
import dana from '../images/dana.jpeg'

const LandingPage = () => {



    return (

        <div>
            <Jumbotron>
                <h1 className="display-3">Pet Shelter!</h1>
                <p className="lead">This is a pet shelter. If you are interested in adopting a pet please submit an application. Within 48 hours you recieve a response.</p>
                <hr className="my-2" />
                <p>Please apply by clicking the button below.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            <Listings />
            <div className="Cards">
                <Card className="card">
                    <CardImg top width="100%" src={otis} alt="Otis" />
                    <CardBody>
                        <CardTitle>Otis</CardTitle>
                        <CardSubtitle>Border Collie</CardSubtitle>
                        <CardText>Age: 1 years old, Black, Male, 20 lbs.</CardText>
                        <Link to="/apply">Apply</Link>
                    </CardBody>
                </Card>
                <Card className="card">
                    <CardImg top width="100%" src={dana} alt="Dana" />
                    <CardBody>
                        <CardTitle>Dana</CardTitle>
                        <CardSubtitle>Domestic Shorthair</CardSubtitle>
                        <CardText>Age: 3 years old, Black, Female, 10 lbs.</CardText>
                        <Link to="/apply">Apply</Link>
                    </CardBody>
                </Card>
            </div>
        </div>
    )

}

export default LandingPage