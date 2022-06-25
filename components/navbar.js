import { Navbar, Container, NavLink, Dropdown } from "react-bootstrap";
import { BsJustify } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc'
import { useState } from "react";

export default function HomeNavbar({ navbarState }) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className={navbarState ? 'bg-dark sticky-top' : 'bg-dark bg-opacity-50 fixed-top'}>
      <Container className="container-xl" fluid>

        <Navbar.Brand href="/"
          className="text-capitalize text-light brand">
          cocktailsDB
        </Navbar.Brand>

        <Container className="d-flex justify-content-end m-0 p-0 d-lg-inline-flex d-sm-none" id="nav-wrap-con">
          <NavLink href="/cocktails"
            className="text-capitalize text-light mx-1">
            cocktails
          </NavLink>
          <NavLink href="/about"
            className="text-capitalize text-light mx-1">
            about
          </NavLink>
        </Container>

        <Dropdown className="d-lg-none d-sm-inline vw-100 text-end position-absolute end-0 pe-3" >

          <Dropdown.Toggle className="hum-btn p-0">
            <BsJustify />
          </Dropdown.Toggle>

          <Dropdown.Menu className={navbarState ? 'text-center bg-dark' : 'text-center bg-dark bg-opacity-50 '}>
            <Dropdown.Item href="/"
              className="text-capitalize m-0 p-0 text-light">
              home
            </Dropdown.Item>
            <Dropdown.Item href="/cocktails"
              className="text-capitalize m-0 p-0 text-light">
              cocktails
            </Dropdown.Item>
            <Dropdown.Item href="/about"
              className="text-capitalize m-0 p-0 text-light">
              about
            </Dropdown.Item>
          </Dropdown.Menu>

        </Dropdown>

      </Container>
    </Navbar >
  )
}