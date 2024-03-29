import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container" style={{ marginBottom: "50px" }}>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <NavLink className="d-inline p-2 text-light" to="/">Pradžia</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="d-inline p-2 text-light" to="/wins">Laimėjimai</NavLink>
                            <NavLink className="d-inline p-2 text-light" to="/poles">„Pole“ pozicijos</NavLink>
                            <NavLink className="d-inline p-2 text-light" to="/fastestlaps">Greičiausi ratai</NavLink>
                            <NavLink className="d-inline p-2 text-light" to="/points">Taškai</NavLink>
                            <NavLink className="d-inline p-2 text-light" to="/podiums">Podiumai</NavLink>
                            <NavLink className="d-inline p-2 text-light" to="/leadings">Pirmavimai</NavLink>
                            <NavLink className="d-inline p-2 text-light" to="/nationalities">Pilietybės</NavLink>
                            <NavLink className="d-inline p-2 text-light" to="/misc">Įvairios</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}