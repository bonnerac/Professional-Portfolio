import React, { Component } from 'react';
import { ScrollTo } from "react-scroll-to";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import { IoIosArrowBack } from "react-icons/io";
import './style.css'

export default class Panel6 extends Component {
    render() {
        return (

            <div className="panel6-wrapper" >
                <Container>
                    <Row>
                        <Col>
                            <Image src="https://picsum.photos/500/410" rounded />
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Alex Bonner</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Front-End Web Developer</Card.Subtitle>
                            After graduating from the University of Dayton with a Bachelor's Degree in Music, I became the Director of Music Ministry at my local church.
                            <br />
                                    <br />
                            When my family moved to Chicago, I became a stay-at-home dad to my energetic daughter, but after two years of reading board books and playing pretend, I wanted to jump-start my next career move.
                            <br />
                                    <br />
                            I decided to attend a Coding Bootcamp at Northwestern University and began my web development journey.
                            <br />
                                    <br />
                            Having completed the program, I'm excited to bring my creative skills and unique background to your next project.
                        </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>



                < ScrollTo >
                    {({ scroll }) => (
                        <button className="about-name-button" onClick={() => scroll({ x: 1360, y: 800, smooth: true })}>
                            <IoIosArrowBack />
                        </button>
                    )}
                </ScrollTo >

            </div >
        )
    }
}