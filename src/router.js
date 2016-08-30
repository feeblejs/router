import React from 'react'
import { browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import routing from './routing'

export default function router(app) {
  app.middleware(routerMiddleware(browserHistory))
  app.model(routing)

  app.router = Routes => {
    app.start()
    const history = syncHistoryWithStore(browserHistory, app.store)
    return app.mount(React.createElement(Routes, { history, store: app.store }))
  }
}
