import React from 'react';
import './menu-bar.scss';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

class MenuBar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Helios</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/trang-chu">Trang chủ</Nav.Link>
      <Nav.Link href="/gioi-thieu">Giới thiệu</Nav.Link>
      <NavDropdown title="Sản phẩm" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Thuốc kê đơn</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Thuốc không kê đơn</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Thực phẩm chức năng</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Dụng cụ y tế</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/tuyen-dung">Tuyển dụng</Nav.Link>
      <Nav.Link href="/lien-he">Liên hệ</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Tìm Kiếm" className="mr-sm-2" />
      <Button variant="outline-success">Tìm Kiếm</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </React.Fragment>
        )
    }
}

export default MenuBar









