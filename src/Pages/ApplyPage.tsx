import React from 'react'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap';
import useInput from '../Hooks/HandleInput';


const ApplyPage = () => {

    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: phoneNumber, bind: bindNumber, reset: resetNumber } = useInput('');
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');

    const handleSubmit = () => {
        alert(`This is the what was inputted: ${firstName} ${lastName} ${phoneNumber}${email}`);
        resetFirstName();
        resetLastName();
        resetNumber();
        resetEmail();
    };

    const validate = (event, inputFirstName = bindFirstName.value, inputLastName = bindLastName.value, inputNumber = bindNumber.value, inputEmail = bindEmail.value) => {
        event.preventDefault();
        const names = /^\D{2,}$/;
        const number = /^\d{3}-\d{3}-\d{4}$/;
        const emails = /[\w-]+@([\w-]+\.)+[\w-]+/;
        if (names.test(inputFirstName) && names.test(inputLastName) && emails.test(inputEmail)) {
            if (number.test(inputNumber)) {
                handleSubmit();
            } else {
                alert('Please follow the 000-000-0000 format.');
            }
        }
        else alert('Please input valid information.');
    };


    // add validate function
    // change onSubmit to validate
    // move preventDefault from handleSubmit
    // add email field for now
    // add first and last name fields
    // change alert from submit fn to validate fn

    return (

        <div>
            <Form onSubmit={validate}>

                <FormGroup>
                    <Label for="exampleText"> If you have already been aproved, please type in your keycode here:
                    </Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>

                <p>If you have not been approved yet, please fill out this application.</p>

                <FormGroup>
                    <Label for="name">First Name: </Label>
                    <Input type="text"
                        name="first name"
                        {...bindFirstName}
                        placeholder="Jon" />
                </FormGroup>

                <FormGroup>
                    <Label for="name">Last Name: </Label>
                    <Input type="text"
                        name="last name"
                        {...bindLastName}
                        placeholder="Doe" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleNumber">Phone Number: </Label>
                    <Input type="text"
                        name="number"
                        {...bindNumber}
                        placeholder="000-000-0000" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Email: </Label>
                    <Input type="text"
                        name="email"
                        {...bindEmail}
                        placeholder="me@email.com" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleText">Why do you want to adopt a pet?</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleText">Do you currently own any pets? If so, how many and what types?
                    </Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleText">Have you ever owned a pet? If so, how many and what types?
                    </Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText"> Please list relationships and age of home residents and frequent visitors.
                    </Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>

                <Button outline color="primary">submit</Button>

            </Form>
        </div>
    )



}

export default ApplyPage