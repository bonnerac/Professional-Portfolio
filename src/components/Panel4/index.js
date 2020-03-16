import React, { Component } from 'react';
import { ScrollTo } from "react-scroll-to";
import './style.css'

export default class Panel4 extends Component {
    render() {
        return (

            <div className="panel4-wrapper" >
                PANEL4
                < ScrollTo >
                    {({ scroll }) => (
                        <button onClick={() => scroll({ x: 1360, y: 800, smooth: true })}>Scroll to Panel 5</button>
                    )}
                </ScrollTo >

            </div >
        )
    }
}