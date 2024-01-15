import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iniciativa1 from './imgs/iniciativa1.png';
import iniciativa2 from './imgs/iniciativa2.png';
import trabajo from './imgs/trabajo.png';


import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
}from 'reactstrap';

const Cardd = () => {
  return (
    
    <Row xs="3">
    <Col className="bg-light border">
    <Card
  color="light"
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src={iniciativa1}
  />
  <CardBody>
    <CardTitle tag="h5">
      Hoja de ruta. 
    </CardTitle>
    
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     
    </CardSubtitle>
    <CardText>
    Analitica ITS.
    </CardText>
    <Button  >
      Ingresar 
    </Button>
  </CardBody>
</Card>
    </Col>


    <Col className="bg-light border">
    <Card
  color="light"
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src={iniciativa2}
  />
  <CardBody>
    <CardTitle tag="h5">
     Actividades Mes.
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      
    </CardSubtitle>
    Analitica ITS.
    <CardText>
     
    </CardText>
    <Button>
      Ingresar 
    </Button>
  </CardBody>
</Card>
    </Col>


    <Col className="bg-light border">
    <Card
  color="light"
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src={trabajo}
  />
  <CardBody>
    <CardTitle tag="h5">
    Nomenclatura Power BI
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     
    </CardSubtitle>
    <CardText>
      Analitica ITS
    </CardText>
    <Button>
     Ingresar 
    </Button>
  </CardBody>
</Card>
    </Col>
   
  </Row>
  )
}

export default Cardd