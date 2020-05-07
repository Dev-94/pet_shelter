import React from 'react'
import { Label, Input, Button } from 'reactstrap'

const LoginPage = () => {

    return (
        <div>
            <h1>Login</h1>
            <Label for="name">Username: </Label>
            <Input type="text"
                name="Username"
                placeholder="Jon123" />
            <Label for="name">Password: </Label>
            <Input type="text"
                name="Password"
                placeholder="Password123" />
            <Button>Login</Button>


        </div>

    )

}

export default LoginPage