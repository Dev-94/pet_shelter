import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from '../Pages/LandingPage';

const NavBar = () => {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/apply">Apply</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        {/* <About /> */}
                    </Route>
                    <Route path="/apply">
                        {/* <Apply /> */}
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </div>
        </Router>

    )


}

// function Home() {
//     return <h2>Home</h2>
// }
// function About() {
//     return <h2>About</h2>
// }
// function Apply() {
//     return <h2>Apply</h2>
// }

export default NavBar