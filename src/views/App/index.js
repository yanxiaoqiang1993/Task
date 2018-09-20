import React, {Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import SiderDemo from '../../layout/index'
import List from '../List'
import Edite from '../Edite'


class App extends Component {
    render() {
        return <div>
            <SiderDemo>
                <Switch>
                    <Route exact path="/" component={List}/>
                    <Route exact path="/list" component={List}/>
                    <Route exact path="/edite" component={Edite}/>
                </Switch>
            </SiderDemo>
        </div>
    }
}

export default App;