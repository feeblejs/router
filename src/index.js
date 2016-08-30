import router from './router'

export default router

export {
  Router,
  Link,
  IndexLink,
  withRouter,
  IndexRedirect,
  IndexRoute,
  Redirect,
  Route,
  History,
  Lifecycle,
  RouteContext,
  useRoutes,
  createRoutes,
  RouterContext,
  RoutingContext,
  PropTypes,
  locationShape,
  routerShape,
  match,
  useRouterHistory,
  formatPattern,
  applyRouterMiddleware,
  browserHistory,
  hashHistory,
  createMemoryHistory,
} from 'react-router'

export {
  syncHistoryWithStore,
  LOCATION_CHANGE,
  routerReducer,
  CALL_HISTORY_METHOD,
  push,
  replace,
  go,
  goBack,
  goForward,
  routerActions,
  routerMiddleware,
} from 'react-router-redux'
