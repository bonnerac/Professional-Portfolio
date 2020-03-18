import React, { Component } from 'react';
import { ScrollTo } from "react-scroll-to";
import { IoIosArrowUp } from "react-icons/io";
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Image from 'react-bootstrap/Image'
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import './style.css'

export default class Panel8 extends Component {
    render() {
        return (
            <>
                <div className="panel8-wrapper" >
                    < ScrollTo >
                        {({ scroll }) => (
                            <button className="button-contact" onClick={() => scroll({ x: 1360, y: 800, smooth: true })}>
                                <IoIosArrowUp />
                            </button>
                        )}
                    </ScrollTo >
                    <Container>
                        <Row className="justify-content-md-center">
                            <Card style={{ width: '25rem' }}>
                                <Image src="https://picsum.photos/400" roundedCircle />
                                <Card.Body>
                                    <Card.Title>Contact Me!</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>
                                        <MdMailOutline className="icon" /> &nbsp;
                                        <a href="mailto:alex.c.bonner@gmail.com">   alex.c.bonner@gmail.com</a>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <FaLinkedin className="icon" /> &nbsp;
                                        <a href="https://www.linkedin.com/in/alexbonner/"> https://linkedin.com/in/alexbonner/</a>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <FaGithubSquare className="icon" /> &nbsp;
                                        <a href="https://github.com/bonnerac">   https://github.com/bonnerac</a>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Row>
                    </Container>

                </div >
            </>
        )
    }
}