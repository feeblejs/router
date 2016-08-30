import test from 'ava'
import feeble from 'feeble'
import router from 'router'

const app = feeble()

app.use(router)

test('add a router function', t => {
  t.is(typeof app.router, 'function')
})
