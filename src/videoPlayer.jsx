import React , { useEffect, useRef } from 'react'
import './App.css';
import video from '../src/assets/video/abkasc.mp4'
import { Container, Row, Col } from 'react-bootstrap';



// function ResponsivePlayer() {
//   return (
//     <div className='video' >
//     <video  height="350" loop autoPlay={true}  controls >
//   <source src={video} type="video/mp4"></source>
//   <source src={video}  type="video/mp4"></source>
  
// </video>
//    </div>
//   )
// }
  
// export default ResponsivePlayer;

export default function ResponsivePlayer() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={1}>
          </Col>
          <Col md={10}>
          <div className='video'>
        <video 
          style={{ maxWidth: "100%", width: "1000px",  }}
          playsInline
          loop
          muted
          // controls
          alt="All the devices"
          src={video }//"https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
          ref={videoEl}
        />
      </div>
          </Col>
        
          
          <Col md={1}>
          </Col>
     </Row>
     </Container>
    </div>
  );
}
