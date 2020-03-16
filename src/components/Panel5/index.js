import React, { Component } from 'react';
import { ScrollTo } from "react-scroll-to"
import './style.css'

export default class Panel5 extends Component {
    render() {
        return (

            <div className="panel5-wrapper">
                PANEL5
                < ScrollTo >
                    {({ scroll }) => (
                        <button onClick={() => scroll({ x: 0, y: 800, smooth: true })}>Scroll to Panel 4</button>
                    )}
                </ScrollTo >
                < ScrollTo >
                    {({ scroll }) => (
                        <button onClick={() => scroll({ x: 2720, y: 800, smooth: true })}>Scroll to Panel 6</button>
                    )}
                </ScrollTo >
                < ScrollTo >
                    {({ scroll }) => (
                        <button onClick={() => scroll({ x: 1360, y: 1600, smooth: true })}>Scroll to Panel 8</button>
                    )}
                </ScrollTo >
            </div>
        )
    }
}

