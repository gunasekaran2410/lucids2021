import { Row, Col, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import React from 'react';
import '../App.css';
import '../responsive.css';
/**Images import */
import logo from '../../src/assets/img/logo.png'
import twitter from '../../src/assets/img/twitter.png'
// import instagram from '../src/assets/img/instagram.png'
import instagram from '../../src/assets/img/instagram.png';
import pinterest from '../../src/assets/img/pinterest.png';

class Header extends React.Component {
render(){
    return (
        <><Container>
          <Row>
            <Col className='list' md={2} sm={0} xs={0}>
  
            </Col>
            <Col className='list text-center' md={2} sm={6} xs={12}>
  
              <Link to="/RoadMap">ROAD MAP</Link>
            </Col>
  
            <Col className='list' md={2} sm={6} xs={12}>
              <div className='text-center'>
                <Link to="/Home">
                  <Image className='logo' src={logo} alt='Lucids Logo.png' /></Link>
              </div>
            </Col>
            <Col className='list text-center' md={2} sm={6} xs={12}>
              <Link to="/Faq">FAQs</Link>
            </Col>
            <Col className='list' md={3} sm={6} xs={12}>
              <ul className='list-inline'>
                <li className='list-inline-item'>
                  <Image src={twitter} alt='twitter' />
                </li>
                <li className='list-inline-item'>
                  <Image src={instagram} alt='instagram' />
                </li>
                <li className='list-inline-item'>
                  <Image src={pinterest} alt='pinterest' />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
          </>
      )
}
}
export default Header;