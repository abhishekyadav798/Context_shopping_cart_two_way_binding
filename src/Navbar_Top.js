import React,{useState} from 'react'
import {Nav,NavItem,NavLink,NavbarBrand,NavbarToggler,
  Collapse,Navbar} from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar_top.css'


function Navbar_Top() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

     


  return (
    <div>
         <Navbar color="light" light expand="md"  >
          <NavbarBrand href="/">Victor</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav  navbar className="ms-auto">
              <NavItem>
                <NavLink  href="/components/">MEN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">WOMEN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">KIDS</NavLink>
              </NavItem>
            
              
          
            </Nav>
          </Collapse>
        </Navbar>

    </div>
  )
}

export default Navbar_Top