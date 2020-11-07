import * as React from 'react'
import ReactDOM from 'react-dom';

import { Router, RouteComponentProps } from '@reach/router'
import { MainContainer } from './components';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

ReactDOM.render(
  <Router>
    <RouterPage pageComponent={<MainContainer />} path='/' />
  </Router>,
  document.getElementById('root')
)
