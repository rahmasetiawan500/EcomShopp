import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './page/Home';
import Footers from './page/Footers';
import Favorite from './page/Favorite';
import Accounts from './page/Accounts';
import Details from './page/Details';
import DetailsSatu from './page/DetailsSatu';
import DetailsDua from './page/DetailsDua';
import Checkouts from './page/Checkouts';
import Thanks from './page/Thanks';
export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Scene key="root" hideNavBar={true}>
                    <Scene key="home" component={Home} initial={true}/>
                    <Scene key="footers" component={Footers}/>
                    <Scene key="favorite" component={Favorite}/>
                    <Scene key="accounts" component={Accounts}/>
                    <Scene key="details" component={Details}/>
                    <Scene key="detailssatu" component={DetailsSatu}/>
                    <Scene key="detailsdua" component={DetailsDua}/>
                    <Scene key="checkouts" component={Checkouts}/>
                    <Scene key="thanks" component={Thanks}/>
                </Scene>
            </Router>
        );
    }
}