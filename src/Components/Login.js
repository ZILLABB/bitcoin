import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    return (
        <Form className='login'>
            <div className='loginDiv'>
                <h1>Welcome Back!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember password" />
                </Form.Group>
                <Button className='loginButton' type="submit">
                    Login
                </Button>
                <p>New User? <span className='terms'>Click here</span></p>
            </div>
        </Form>
    );
}

export default Login;
