import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import * as ROUTES from './constants/routes'
import './App.css'
import Home from './views/Home/Home'
import CreatePoll from './views/CreatePoll/CreatePoll'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={ROUTES.CREATE_POLL}>
                        <CreatePoll />
                    </Route>
                    <Route path={ROUTES.HOME}>
                        <Home />
                    </Route>
                </Switch>
            </Router>            
        </div>
    )
}

export default App
