import { Container, Button, Col, Row } from "react-bootstrap";
import './login.css';
import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', value1: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        console.log('this.state.value: ', this.state.value);
        console.log('this.errorState.value: ', this.state.value1);
        event.preventDefault();
        if (this.state.value === '468698') {
            window.location.assign("/home");
        } else if (this.state.value === '') {
            console.log('empty');
            this.setState({ value1: '1' });
            console.log('this.errorState.value1: ', this.state.value1);
        } else {
            this.setState({ value1: '2' });
        }
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        this.setState({ value1: '' });
    }

    render() {
        return (
            <>
                <div className="pageBack">
                    <Container className="pageBack">
                        <Row className="pageBack">
                            <Col md={4} className="pageBack">
                            </Col>
                            <Col md={3} className="pageBack">
                                <div id="parent" className="pageBack">
                                    <form id="form_login" onSubmit={this.handleSubmit}>

                                        <h1 className="text-left"> Guest Area
                                        </h1>
                                        <p className="text-left"> Please enter the password below.</p>
                                        
                                        <div className="mb-3 d-grid gap-2">
                                            <input type="password" placeholder="Password" value={this.state.value} onChange={this.handleChange} className="borderCls" />
                                        </div>
                                        <div className='error_message'>

                                            <div>
                                                {this.state.value1 === "1" && <h5 className='text-danger'>Make sure you enter a password.</h5>}
                                            </div>

                                            <div>
                                                {this.state.value1 === "2" && <h5 className='text-danger'>Please enter the correct password. </h5>}
                                            </div>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <Button className="mb-3" size="lg" className="btn-blue" type="submit">
                                                Go
                                            </Button>
                                        </div>
                                  
                                    </form>
                                </div>
                            </Col>
                            <Col md={4} className="pageBack">
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}


export default Login;