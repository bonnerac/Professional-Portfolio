import React, { Component } from 'react';
import { ScrollTo } from "react-scroll-to";
import './style.css'

export default class Panel2 extends Component {
    render() {
        return (

            <div className="panel2-wrapper" >
                PANEL2
                < ScrollTo >
                    {({ scroll }) => (
                        <button onClick={() => scroll({ x: 1360, y: 800, smooth: true })}>Scroll to Panel 5</button>
                    )}
                </ScrollTo >

            </div >
        )
    }
}
