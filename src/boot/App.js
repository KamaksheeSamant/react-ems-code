import React, { Component } from 'react';
import Toolbar from '../common/components/Toolbar/Toolbar';
import Drawer from '../common/components/Drawer/Drawer';
import ShadowOffset from '../common/components/Drawer/ShadowOffset';
//import {Router, Route} from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
import Aboutus from '../container/AboutusContainer/Aboutus';
import Setting from '../container/SettingContainer/Setting';

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false
    };
  }

  drawerToggler = () => {
    this.setState((prevState) => {
      return {
        drawerOpen: !prevState.drawerOpen
      };
    })
  }

  closeDrawer = () => {
    this.setState({
      drawerOpen: false
    });
  }
  render() {

    return (
      <div className="App" style={{ height: '100%' }}>
        <Toolbar drawerToggler={this.drawerToggler} />
        <Drawer isDrawerOpen={this.state.drawerOpen} />
        {this.state.drawerOpen &&
          <React.Fragment>
            <ShadowOffset closeDrawer={this.closeDrawer} />
          </React.Fragment>
        }

        <BrowserRouter>
          <div>
            <Route exact path="/" component={Setting} />
            <Route path="/SETTING" component={Setting} />
            <Route path="/HOME" component={Setting} />
            <Route path="/ABOUT_US" component={Aboutus} />
          </div>
        </BrowserRouter>
        {/* <main>
          <p>Hello World !</p>
        </main> */}
      </div>
    );
  }
}

export default App;
