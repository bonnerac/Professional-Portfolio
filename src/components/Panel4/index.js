import React, { Component } from 'react';
import { ScrollTo } from "react-scroll-to";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './style.css'
import { Col } from 'react-bootstrap';
import cinemaimage from '../../images/cinema.jpg'
import soilimage from '../../images/soil.png'
import { MdHttp } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaFilePowerpoint } from "react-icons/fa";


export default class Panel4 extends Component {
    render() {
        return (
            <>
                <div className="panel4-wrapper" >
                    < ScrollTo >
                        {({ scroll }) => (
                            <button onClick={() => scroll({ x: 1360, y: 800, smooth: true })}>Scroll to Panel 5</button>
                        )}
                    </ScrollTo >
                    <Container>
                        <Row>
                            <CardDeck>
                                <Col>
                                    <Accordion>
                                        <Card>
                                            <Card.Img variant="top" src={cinemaimage} />
                                            <Card.Body>
                                                <Card.Title>CinemaVox</Card.Title>
                                                <Card.Text>
                                                    An application that takes the plot of your favorite movie, and reads it aloud in
                                                    multiple speeds and accents. Built using Materialize and uses 3 APIs (Voice RSS Text to Speech, The Open Movie Database, Youtube)

      </Card.Text>
                                            </Card.Body>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} eventKey="0">
                                                    Click for project links!
                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <a className="project-icon" href="https://bonnerac.github.io/project1/">
                                                        <MdHttp />
                                                    </a>
                                                    <a className="project-icon" href="https://github.com/bonnerac/project1">
                                                        <FaGithubSquare />
                                                    </a>
                                                    <a className="project-icon" href="https://docs.google.com/presentation/d/1gF-MD9cWOFknOY4fRwV76JEK59oXvhGXbxyra-9O7Xw/edit?usp=sharing">
                                                        <FaFilePowerpoint />
                                                    </a>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Col>
                                <Col>
                                    <Accordion>
                                        <Card>
                                            <Card.Img variant="top" src={soilimage} />
                                            <Card.Body>
                                                <Card.Title>SoilTime</Card.Title>
                                                <Card.Text>
                                                    An application that shows you information about the soil and plant life in a given area. Uses the Distributed Active Archive Center for Biochemical Dynamics database from NASA. Built using CSS Grid and features a custom animation.
      </Card.Text>
                                            </Card.Body>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} eventKey="0">
                                                    Click for project links!
                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <a className="project-icon" href="https://sheltered-shore-12233.herokuapp.com/">
                                                        <MdHttp />
                                                    </a>
                                                    <a className="project-icon" href="https://github.com/SoilTime/Soil-App">
                                                        <FaGithubSquare />
                                                    </a>
                                                    <a className="project-icon" href="https://docs.google.com/presentation/d/1MdX7_UnOzreRuPxxKgGZYXibERu5Rt1Jxc4yBzSjlNo/edit?usp=sharing">
                                                        <FaFilePowerpoint />
                                                    </a>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Col>
                                <Col>
                                    <Accordion>
                                        <Card>
                                            <Card.Img variant="top" src="https://i.imgur.com/SyJcxQk.png" />
                                            <Card.Body>
                                                <Card.Title>HeroBox</Card.Title>
                                                <Card.Text>
                                                    An subscription e-commerce site that delivers curated Marvel comics each month. Built with React and CSS grid, featuring a login using Passport and Credit Card payment using Stripe.
      </Card.Text>
                                            </Card.Body>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} eventKey="0">
                                                    Click for project links!
                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <a className="project-icon" href="https://pacific-chamber-07789.herokuapp.com/">
                                                        <MdHttp />
                                                    </a>
                                                    <a className="project-icon" href="https://github.com/Superb-Owls/Subscription-box">
                                                        <FaGithubSquare />
                                                    </a>
                                                    <a className="project-icon" href="https://docs.google.com/presentation/d/1biS8w7GJff7HjOaJWAlOnAa6y9eEiHNel4LNRAPo6xQ/edit#slide=id.p">
                                                        <FaFilePowerpoint />
                                                    </a>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Col>
                            </CardDeck>
                        </Row>
                    </Container>


                </div >
            </>
        )
    }
}