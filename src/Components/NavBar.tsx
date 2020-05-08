import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from '../Pages/LandingPage';
import ApplyPage from '../Pages/ApplyPage'
import AboutPage from '../Pages/AboutPage'
import LoginPage from '../Pages/LoginPage'
import './NavBar.css'

const NavBar = () => {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link className="link" to="/">Home</Link></li>

                        <li><Link className="link" to="/about">About</Link></li>

                        <li><Link className="link" to="/apply">Apply</Link> </li>

                        <li> <Link className="link" to="/login">Login</Link></li>
                    </ul>
                    <hr />
                </nav>

                <Switch>
                    <Route path="/about" component={AboutPage}>
                    </Route>
                    <Route path="/apply" component={ApplyPage}>
                    </Route>
                    <Route path="/login" component={LoginPage}>
                    </Route>
                    <Route exact={true} path="/" component={LandingPage}>
                    </Route>
                </Switch>
            </div>
        </Router>

    )


}

// function Home() {
//     return <LandingPage />
// }
// function About() {
//     return <h2>About</h2>
// }
// function Apply() {
//     return <ApplyPage />
// }

export default NavBar