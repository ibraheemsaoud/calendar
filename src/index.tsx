import React from 'react'
import ReactDOM from 'react-dom';

import { Router, RouteComponentProps } from '@reach/router'

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

ReactDOM.render(
  <Router>
    {/* <RouterPage pageComponent={<Example />} path='/' /> */}
  </Router>,
  document.getElementById('root')
)
