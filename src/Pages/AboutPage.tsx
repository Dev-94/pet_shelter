import React from 'react'
import { Link } from 'react-router-dom'


const AboutPage = () => {
    return (<div>

        <h1 className="display-3">Pet Shelter!</h1>
        <p className="lead">This is a pet shelter. If you are interested in adopting a pet please submit an application. Within 48 hours you will recieve a response.</p>
        <hr className="my-2" />
        <p>Please apply by clicking the button below.</p>
        <p className="lead">
            <Link to="/">Home</Link>
        </p>

    </div>)

}

export default AboutPage