import React from 'react'
import VideoLooper from 'react-video-looper'
import './App.css';
import video from '../src/assets/video/abkasc.mp4'
import { Container, Row, Col } from 'react-bootstrap';

class ResponsivePlayer extends React.Component {
    render () {
      return (
        
        <div className='video' >
          <Container>
            <Row>
              <Col md={2}>
                </Col>
                <Col md={8}>
              <VideoLooper className="video_responsive" loop source={video}  />
              </Col>
              <Col md={2}>
                </Col>
            </Row>
   </Container>
        </div>
      )
    }
}
  
export default ResponsivePlayer;