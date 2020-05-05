import React from 'react'
import NavBar from '../Components/NavBar.tsx'
// import NCard from '../Components/Card.tsx'
import { Card, CardImg, CardText, CardLink, CardBody, CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';
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
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )

}

export default LandingPage