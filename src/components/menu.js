import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';
import firebase from 'firebase';
//NEED to import react because since using JSX it converts the html to a React.createElement
class Menu extends Component {
    constructor(props) {
        super(props);

    }

    getSearchText(searchText) {
        this.props.getSearchText(searchText.target.value, searchText.key);
    }

    logout() {
      firebase.auth().signOut().then(function() {
        console.log('user successfully signed out');
      }, function(error) {
        // An error happened.
      });
    }

    render() {
        return (
            <div>
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Toggle><img src="../img/liovinci-logo-icon.png" width="20" height="20"/></Navbar.Toggle>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" id="searchbar" onKeyUp={this.getSearchText.bind(this)}/>
                            </FormGroup>
                        </Navbar.Form>
                        <Nav pullRight>
                            <IndexLinkContainer to={"/"}>
                                <NavItem>Home</NavItem>
                            </IndexLinkContainer>
                            <LinkContainer to={"addProject/"}><NavItem>Add Projects</NavItem></LinkContainer>
                            <NavDropdown title={<img src="../img/liovinci-logo-icon.png" width="20" height="20"/>}
                                         id="basic-nav-dropdown">
                                <MenuItem>Username</MenuItem>
                                <MenuItem>1,000 Points</MenuItem>
                                <MenuItem divider/>
                                <MenuItem onClick={this.logout.bind(this)}>Logout</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}


export default Menu;
