import React, { Component } from 'react';
import { ScrollTo } from "react-scroll-to";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './style.css'

export default class Panel1 extends Component {
    render() {
        return (

            <div className="panel2-wrapper" >
                <Row>
                <Col></Col>
                <Col xs={9}>
                <Jumbotron style={{
                    background: 'rgba(63, 63, 191, 0.9)',
                    color: "black",
                    textAlign: "center"
                }}>
                    <Image className="greeting-image" src="https://i.imgur.com/Pv4z7Vm.png" rounded />
                    <h1>Hi, I'm Alex Bonner</h1>
                    <p>
                        I'm a Front-End Web Developer from Chicago, IL. <br />
                        I have a diverse set of skills from HTML5 and CSS to React and CSS Grid. <br />
                        Check out some of my projects, learn more about me, and get in touch!
  </p>
                    <p>
                        < ScrollTo >
                            {({ scroll }) => (
                                <Button variant="primary" onClick={() => scroll({ x: 1360, y: 800, smooth: true })}>Let's Start!</Button>
                            )}
                        </ScrollTo >
                    </p>
                </Jumbotron>
                </Col>
                <Col></Col>
                </Row>



            </div >
        )
    }
}
