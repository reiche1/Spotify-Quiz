import React, { useState } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Auth from './Auth'
import Main from './Main'
import RouteHandler from './RouteHandler'
import Login from './Login'
import Footer from './Footer'
import { checkAuth } from '../api/auth'

const App = () => {
    const [authorized, setAuthorized] = useState(checkAuth())

    return (
        <BrowserRouter>
            <Header>
                <Auth authorized={authorized} setAuthorized={setAuthorized} />
            </Header>
                <Switch>
                    <Route path="/callback" exact>
                        <Login setAuthorized={setAuthorized} />
                    </Route>
                    <Route path="/">
                        {authorized ? <RouteHandler /> : <Main />}
                    </Route>
                </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;