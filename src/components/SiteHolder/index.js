import React from "react"
import Panel1 from '../Panel1'
import Panel2 from '../Panel2'
import Panel3 from '../Panel3'
import Panel4 from '../Panel4'
import Panel5 from '../Panel5'
import Panel6 from '../Panel6'
import Panel7 from '../Panel7'
import Panel8 from '../Panel8'
import Panel9 from '../Panel9'
import './style.css'


function SiteHolder() {

    return (
        <>
            <div className="site-holder-wrapper">
                <div className="row">
                    <Panel1 />
                    <Panel2 />
                    <Panel3 />
                </div>
                <div className="row">
                    <Panel4 />
                    <Panel5 />
                    <Panel6 />
                </div>
                <div className="row">
                    <Panel7 />
                    <Panel8 />
                    <Panel9 />
                </div>
            </div>
        </>
    )
}

export default SiteHolder;