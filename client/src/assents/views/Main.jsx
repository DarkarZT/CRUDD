import React from 'react'
import Navbar1 from '../components/navbar.jsx';
import Carousel1 from '../components/Carousel.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  {Container}  from 'reactstrap';
import Cardd from '../components/cardd.jsx';


const Main = () => {
  return (
    <div>
       
            <Navbar1/>
           

        <Carousel1/>
        <br />
        <br />
    <Container>
      <Row>
    <Col className="">
              <Cardd/>
    </Col>
  </Row>  
    </Container>
  
     

    </div>


  )
}

export default Main