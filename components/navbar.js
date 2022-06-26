import { Navbar, Container, NavLink, Dropdown } from "react-bootstrap";
import { BsJustify } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc'
import { useState } from "react";

export default function HomeNavbar({ navbarState }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className={navbarState ? 'bg-dark sticky-top p-0' : 'bg-dark bg-opacity-50 fixed-top p-0'}>
      <Container className="container-xl" fluid>

        <Navbar.Brand href="/"
          className="text-capitalize text-light brand p-0">
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

        <Dropdown autoClose={false} className="d-lg-none d-sm-inline text-end position-absolute end-0 m-0 p-0" onClick={() => setIsOpen(!isOpen)}>

          <Dropdown.Toggle className="hum-btn p-0 me-3">
            {
              isOpen ? <VscChromeClose /> : <BsJustify />
            }
          </Dropdown.Toggle>

          <Dropdown.Menu align={'end'} className={navbarState ? 'text-center bg-dark vw-100' : 'text-center bg-dark bg-opacity-50 vw-100'}>
            <Dropdown.Item href="/"
              className="text-capitalize m-0 p-1 text-light">
              home
            </Dropdown.Item>
            <Dropdown.Item href="/cocktails"
              className="text-capitalize m-0 p-1 text-light">
              cocktails
            </Dropdown.Item>
            <Dropdown.Item href="/about"
              className="text-capitalize m-0 p-1 text-light">
              about
            </Dropdown.Item>
          </Dropdown.Menu>

        </Dropdown>

      </Container>
    </Navbar >
  )
}