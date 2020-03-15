import React from "react"
import Panel1 from '../Panel1'
import Panel2 from '../Panel2'
import Panel3 from '../Panel3'
import './style.css'


function SiteHolder() {
    return (
        <>
            <div className="site-holder-wrapper">
                <Panel1 />
                <Panel2 />
                <Panel3 />
            </div>
        </>
    )
}

export default SiteHolder;