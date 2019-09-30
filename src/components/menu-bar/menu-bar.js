import React from 'react'
import './menu-bar.scss'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { locale } from '../../config/locale'
import Cookies from 'universal-cookie';
import { ListenService } from '../../services/listen';

class MenuBar extends React.Component {
 constructor() {
   super()
  
 }

 switchLanguage = (lang) => {
   let cookie = new Cookies()
   cookie.set('lang', lang)
   locale.setLanguage(lang)
   this.setState({})
   ListenService.switchLang(lang)
 }
 render() {
   return (
     <React.Fragment>
       <Navbar bg="light" expand="lg">
         <Navbar.Brand href="/">Helios</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto">
             <Nav.Link href="/" className='w-home'>{locale.home}</Nav.Link>
             <NavDropdown className='w-course' title={locale.product} id="basic-nav-dropdown">
               <NavDropdown.Item href="#">{locale.prescription_medication}</NavDropdown.Item>
               <NavDropdown.Item href="#">{locale.non_prescription_drugs}</NavDropdown.Item>
               <NavDropdown.Item href="#">{locale.functional_foods}</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#">{locale.cosmetics}</NavDropdown.Item>
             </NavDropdown>
             <Nav.Link className= 'w-blog' href="/blog">{locale.blog}</Nav.Link>
             <Nav.Link className= 'w-gioi-thieu' href="/gioi-thieu">{locale.profile}</Nav.Link>
             <Nav.Link className= 'w-tuyen-dung' href="/tuyen-dung">{locale.hiring}</Nav.Link>
             <Nav.Link className = 'w-lien-he' href="/lien-he">{locale.contact}</Nav.Link>
           </Nav>
           <Form inline>
             <FormControl type="text" placeholder={locale.search} className="mr-sm-2" />
             <Button variant="outline-success">{locale.search}</Button>
           </Form>
           <Nav>
             <NavDropdown title={locale.lang} id="basic-nav-dropdown">
               <NavDropdown.Item onSelect={() => this.switchLanguage('vi')}>{locale.vi}</NavDropdown.Item>
               <NavDropdown.Item onSelect={() => this.switchLanguage('en')}>{locale.en}</NavDropdown.Item>
             </NavDropdown>
             <Nav.Link href="#">{locale.logout}</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
     </React.Fragment>
   )
 }
}
export default MenuBar








