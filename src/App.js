import React from 'react';
import SiteHolder from './components/SiteHolder'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

export default class App extends React.Component {
  componentDidMount() {
    console.log('Component DID MOUNT!')
    window.scrollTo(500, 500);
  }
  render() {


    return (
      <>
        <SiteHolder>

        </SiteHolder>
      </>
    );
  }
}


