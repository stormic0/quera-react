import 'assets/scss/style.scss'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { indexRoutes } from 'routes'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />
      })}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
