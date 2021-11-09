import { Row, Col, Container, Image, Button, InputGroup, FormControl, Modal } from 'react-bootstrap';
import toy from '../src/assets/img/toy.png'
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import ResponsivePlayer from './videoPlayer'
import './App.css';
import './responsive.css';
import  Header from './components/Header';
import Footer from './components/Footer';
function Home() {
  let [count, setCount] = useState(1);

  function incrementCount() {
    if (count < 10) {
      count = count + 1;
      setCount(count);
    }
  }
  function decrementCount() {
    if(count>1 && count<=10)
    count = count - 1;
    setCount(count);
  }
  // Connct Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dialog, setDialog] = useState("Nothing");
  function ConnectedSuccess(){
    setDialog("true");    
    setShow(false);
  }
  function ConnectedFailure(){
    setDialog("false");
    setShow(false);
  }

    return (
      <div className='background_site'>
      
      <Header/>
      <div>

          <ResponsivePlayer />
          <br></br>
          <Container className='text-center'>
            <Link to="/Lunch">
              <Button className='join-btn'> JOIN WHITELIST</Button> </Link>
          </Container>
          <br></br>
          <Container className='content_section'>
            <Row>
              <Col md={2}>
                <div className='story text-right'> <span> THE</span> <span className='inner_padding'></span> <span>STORY</span>
                </div>
              </Col>
              <Col md={10}>
                <p className='padding-top'>
                  It's the year 2066. Life is as we know it.
                </p><br></br>
                <p>
                  Millennials are in wheelchairs, listening to the backstreet boys in their nursing homes. Gen Z is busy doing Tik-Tok dances - in the middle of their midlife crisis of course. However, this is all happening in a parallel digital universe: the Metaverse. We humans found it easier to slip into virtual reality rather than trying to coexist in peace. Earth - in its physical form, is on the very brink of extinction. And there is nothing humans can do to salvage it. Just when all seems lost, a very bleak glimmer of hope. An extra-terrestrial civilization, willing to give this planet one last chance before going Thanos on it. They use their powers and resurrect 6666 souls from their graves and transport them into the metaverse. Lucids - these supernatural beings can heal the world. But they need a human companion that mirrors their vibe, and only then can they tap into their power source. If you're one among the chosen ones, with the right vibe, your Lucids will find you.
                </p><br></br>
                <p>
                  Will Lucids be able to give this dying planet a chance of survival?
                </p>
                <p> Will Lucids be able to save humanity?</p>
                <p className='padding-bottom'> Will Lucids be able to save the world?

                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className='toys' md={6} sm={12} xs={12}>
                <Image src={toy} />
              </Col>
              <Col md={6} sm={12} xs={12}>
                <div className='form'>
                  <div className='form_text'>
                    LET YOUR LUCID <br></br>
                    FIND YOU
                  </div>
                  <div className='form_content'>
                    Connect your ERC-20 Metamask wallet and <br></br>let your Lucids find you.
                  </div>
                  <div className='form_content_right'>
                    PRICE PER LUCID

                  </div>
                  <div className='form_content_right2'>
                    0.066 ETH

                  </div>
                  <hr></hr>
                  <InputGroup className="mb-3">
                    <FormControl value={count}
                      placeholder="ENTER THE AMOUNT OF LUCIDS YOU WANT TO PURCHASE"
                      aria-label="ENTER THE AMOUNT OF LUCIDS YOU WANT TO PURCHASE" />
                    <InputGroup.Text onClick={decrementCount} className='minus'>-</InputGroup.Text>
                    <InputGroup.Text onClick={incrementCount} className='minus'>+</InputGroup.Text>
                  </InputGroup>
                  <Button className='connect' onClick={handleShow}> Connect wallet</Button><br></br><br></br>
                  <div className='error_message'>

                    <div>
                      {dialog === "false" && <h5 className='text-danger'>Not connected</h5>}
                    </div>

                    <div>
                      {dialog === "true" && <h5 className='text-success'>Connected success </h5>}
                    </div>
                  </div>
                  <small>For NFT newbies, note that only 1 NFT can be minted per transaction.
                    A maximum of 10 NFTs can be minted per wallet.</small>
                </div>
              </Col>
            </Row>
            <br></br>
            
          </Container>

          {/* Conncect Modal */}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>Would you like to connect to the Wallet?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={ConnectedSuccess}>
                Yes
              </Button>
              <Button variant="danger" onClick={ConnectedFailure}>
                No
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
       <Footer/>
        </div>
    )
}


export default Home;