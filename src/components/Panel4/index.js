import React, { Component } from 'react';
import { ScrollTo } from "react-scroll-to";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import './style.css'


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
                    <CardDeck>
                        <Accordion>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>CinemaVox</Card.Title>
                                    <Card.Text>
                                        An application that takes the plot of your favorite movie, and reads it aloud in
                                        multiple speeds and accents.
      </Card.Text>
                                </Card.Body>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} eventKey="0">
                                        Click me!
                            </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>CinemaVox</Card.Title>
                                    <Card.Text>
                                        An application that takes the plot of your favorite movie, and reads it aloud in
                                        multiple speeds and accents.
      </Card.Text>
                                </Card.Body>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} eventKey="0">
                                        Click me!
                            </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>CinemaVox</Card.Title>
                                    <Card.Text>
                                        An application that takes the plot of your favorite movie, and reads it aloud in
                                        multiple speeds and accents.
      </Card.Text>
                                </Card.Body>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} eventKey="0">
                                        Click me!
                            </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </CardDeck>


                </div >
            </>
        )
    }
}