import React from 'react';
import { withRouter, Redirect } from 'react-router';

import {
    Container,
    Form,
    FormContent,
    FormH1,
    FormLabel,
    FormWrap,
    Icon,
    FormInput,
    Text,
    FormButton,
} from './contactElements';

const Contact = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Luna Labs</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Contact Us</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for"></FormLabel>
                            <FormInput type="text" required />
                            <FormButton type="submit">Send</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default withRouter(Contact);
