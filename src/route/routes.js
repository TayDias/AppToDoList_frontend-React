import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import PainelListas from 'pages/PainelListas'
import Lista from 'pages/PainelTarefas'

/* eslint-disable */
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PainelListas} />
            <Route path='/lista' component={Lista} />
            <Route path='*' component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes