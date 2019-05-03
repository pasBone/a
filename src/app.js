import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import createReducer from './redux/reducer'
import rootSaga from './redux/saga'
const sagaMiddleware = createSagaMiddleware()
const reduxRouterMiddleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  createReducer(undefined),
  composeEnhancers(applyMiddleware(sagaMiddleware, reduxRouterMiddleware))
)
sagaMiddleware.run(rootSaga)

export const dva = {
  config: {
    onError (err) {
      err.preventDefault()
    }
  }
}

export function render (oldRender) {
  oldRender()
}

export function rootContainer (container) {
  const DvaContainer = require('@tmp/DvaContainer').default
  return (
    <div id='appdd'>
      <Provider store={store}>
        {React.createElement(DvaContainer, null, container)}
      </Provider>
    </div>
  )
}
