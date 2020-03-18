import React, { Component } from 'react';
import { ScrollTo } from "react-scroll-to";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './style.css'

export default class Panel1 extends Component {
    render() {
        return (

            <div className="panel2-wrapper" >
                <Jumbotron style={{
                    background: 'rgba(63, 63, 191, 0.9)',
                    color: "black",
                    textAlign: "center"
                }}>
                    <h1>Hi, I'm Alex Bonner</h1>
                    <p>
                        I'm a Front-End Web Developer from Chicago, IL. <br />
                        I have a diverse set of skills from HTML5 and CSS to React and CSS Grid. <br />
                        Check out some of my projects, learn more about me, and get it touch!
  </p>
                    <p>
                        < ScrollTo >
                            {({ scroll }) => (
                                <Button variant="primary" onClick={() => scroll({ x: 1360, y: 800, smooth: true })}>Let's Start!</Button>
                            )}
                        </ScrollTo >
                    </p>
                </Jumbotron>



            </div >
        )
    }
}
