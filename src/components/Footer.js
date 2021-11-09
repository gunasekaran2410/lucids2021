import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import pupa from '../../src/assets/img/Pupa Labs Logo.png';
class Footer extends React.Component {
    render(){
        return (
            <> <Container>
                <hr></hr>
            <Row>
           
              <Col className='footer second_footer' sm={12} md={12} xs={12}>
              <a href="#" > Conceptualised and executed by
                </a><br></br>
                <Image src={pupa} /><br></br>
                <a  href="#"> Lucids.io 2021
    </a>
              </Col>
            
            </Row>
          </Container>
              </>
          )
    }
    }
    export default Footer;