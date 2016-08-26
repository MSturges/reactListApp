import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Layout from './components/Layout'
import List from './components/List'


export default (
  <Route path="/" component={Layout}>
  <IndexRoute component={List} />
  <Redirect from="*" to="/" />
  </Route>
)
