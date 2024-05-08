import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import ESTD2009 from '../Images/ESTD2009.png';
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navigatinbarcont">  {/* Added collapseOnSelect and expand="lg" for responsiveness */}
        <Container>
        <img 
             className="mx-auto h-14 w-auto rounded-full"
            src={ESTD2009}
            alt="TAPROBANA TAXI"
          />

         
           <Navbar.Toggle aria-controls="basic-navbar-nav" />  {/* Added toggle button for mobile responsiveness */}
            <Nav className="text-center " id="basic-navbar-nav">
            <Nav.Link href="/" className='navitems px-3'>   Home                   </Nav.Link>
            <Nav.Link href="/contact" className='navitems px-3'> Contact Us        </Nav.Link>
            <Nav.Link href="/about" className='navitems px-2'>  About              </Nav.Link>
            <Nav.Link href="/tours" className='navitems px-3'>   Tours             </Nav.Link>
            <Nav.Link href="/stay" className='navitems px-3'>   Stay Home             </Nav.Link>
            <Nav.Link href="/fleet" className='navitems  flex lg:mr-96 px-3'> Choose Your Fleet   </Nav.Link>
            <div className="loginalign flex lg:ml-96">
           
            <Nav.Link href="/login" className='navitems'>  Login              </Nav.Link>
              
                </div>
           
            {/* Removed duplicate "Stay Home" link */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
