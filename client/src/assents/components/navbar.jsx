import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Logo1 from './imgs/logo.png';
import '../styles/titnav.css';




import {
  Collapse,
  Navbar,
  NavbarToggler,
 
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar1(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}
        
         color="dark"
         opacity="0.7%"
         
         dark>
      <Nav> 
   
        <img src={Logo1}  width="50" height="50" />
        
     <Nav className='titnav'>
      <h3  >ITS InfoCom </h3>
     </Nav>

    
    
    <NavItem>
    <NavLink
      active
      href="#"
    >
      
     Inicio
    </NavLink>
  </NavItem>
  <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Actividades
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Hoja de ruta</DropdownItem>
                <DropdownItem>Actividades Mes</DropdownItem>
                <DropdownItem>Nomenclatura Power BI</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
  
</Nav>
        <NavbarToggler onClick={toggle} />
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
            <NavLink href='../views/Login.jsx'>
                Iniciar Sesion
              </NavLink>
             
            </NavItem>
            <NavItem>
              <NavLink href='../views/Register.jsx'>
                Registrate
              </NavLink>
            </NavItem>
           
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar1;