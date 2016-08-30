import feeble from 'feeble'
import { routerReducer } from 'react-router-redux'

const routing = feeble.model({
  namespace: 'routing',
})

routing.addReducer(routerReducer)

export default routing
