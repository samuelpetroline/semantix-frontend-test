import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { ROUTES } from 'config/routes'

import Layout from 'views/Layout'
import MainPage from 'views/MainPage'
import SubPage from 'views/SubPage'

const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes />
            </Layout>
        </BrowserRouter>
    )
}

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.main} component={MainPage} />
            <Route exact path={ROUTES.sub} component={SubPage} />
            <Route exact path={ROUTES.logout} />

            <Redirect to={ROUTES.main} />
        </Switch>
    )
}

export default RouterProvider