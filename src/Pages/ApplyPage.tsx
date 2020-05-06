import React from 'react'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap';
import Application from '../Components/Application'

const ApplyPage = () => {

    return (
        <div>
            <FormGroup>
                <Label for="exampleText"> If you have already been aproved, please type in your keycode here:
                </Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>

            <p>If you have not been approved yet, please fill out this application.</p>
            <Application />
        </div>)

}

export default ApplyPage