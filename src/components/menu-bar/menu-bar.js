import React from 'react';
import './menu-bar.scss';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import {locale} from '../../config/locale'

class MenuBar extends React.Component {
  constructor(){
    super()
    this.state = {
      lang: 'vi'
    }
    locale.setLanguage(this.state.lang)
   

  }
  switchLanguage = () => {
    this.setState({
    lang: this.state.lang == 'vi' ? 'en' : 'vi'
    })
    locale.setLanguage(this.state.lang)
    this.setState({})
  }
    render() {
        return(
            <React.Fragment>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Helios</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/trang-chu">{locale.home}</Nav.Link>
      <Nav.Link href="/gioi-thieu">{locale.profile}</Nav.Link>
      <NavDropdown title={locale.product} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">{locale.prescription_medication}</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Thuốc không kê đơn</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Thực phẩm chức năng</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Dụng cụ y tế</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/tuyen-dung">{locale.hiring}</Nav.Link>
      <Nav.Link href="/lien-he">{locale.contact}</Nav.Link>
    </Nav>
    <Form inline>
      
      <FormControl type="text" placeholder={locale.search} className="mr-sm-2" />
      <Button variant="outline-success">{locale.search}</Button>
    </Form>
    <Nav>
    <Button onClick={() => this.switchLanguage()}>{locale.lang}</Button>
      <Nav.Link href="#">{locale.logout}</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </React.Fragment>
        )
    }
}

export default MenuBar









