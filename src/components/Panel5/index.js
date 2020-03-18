import React, { Component } from 'react';
import { ScrollTo } from "react-scroll-to"
import Container from 'react-bootstrap/Container'
import './style.css'

export default class Panel5 extends Component {
    render() {
        return (

            <div className="panel5-wrapper">
                <Container>

                    < ScrollTo >
                        {({ scroll }) => (
                            <button className="button portfolio" onClick={() => scroll({ x: 0, y: 800, smooth: true })}>
                                Portfolio
                            </button>
                        )}
                    </ScrollTo >
                    < ScrollTo >
                        {({ scroll }) => (
                            <button className="button contact" onClick={() => scroll({ x: 1360, y: 1600, smooth: true })}>Contact</button>
                        )}
                    </ScrollTo >
                    < ScrollTo >
                        {({ scroll }) => (
                            <button className="button about-me" onClick={() => scroll({ x: 2720, y: 800, smooth: true })}>About Me</button>
                        )}
                    </ScrollTo >

                    <img className="tvguitar" src="https://i.imgur.com/gbX4tru.gif" alt="television"></img>

                </Container>
            </div>
        )
    }
}

