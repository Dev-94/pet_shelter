import React from 'react'
import { Card, CardTitle, CardSubtitle, CardText, CardImg, CardBody } from 'reactstrap'

const Listings = () => {



    return (
        <div>
            Listings


            <div className="Cards">
                <Card className="card">
                    <CardImg top width="100%" alt="Otis" />
                    <CardBody>
                        <CardTitle>Otis</CardTitle>
                        <CardSubtitle>Border Collie</CardSubtitle>
                        <CardText>Age: 1 years old, Black, Male, 20 lbs.</CardText>
                        {/* <Link to="/apply">Apply</Link> */}
                    </CardBody>
                </Card>
                <Card className="card">
                    <CardImg top width="100%" alt="Dana" />
                    <CardBody>
                        <CardTitle>Dana</CardTitle>
                        <CardSubtitle>Domestic Shorthair</CardSubtitle>
                        <CardText>Age: 3 years old, Black, Female, 10 lbs.</CardText>
                        {/* <Link to="/apply">Apply</Link> */}
                    </CardBody>
                </Card>

            </div>
        </div>
    )

}

export default Listings