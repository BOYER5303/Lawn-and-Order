import {createStore, applyMiddleware} from './node_modules/redux'
import promiseMiddleware from './node_modules/redux-promise-middleware'

import reducer from './reducers/index'

export default createStore(reducer, applyMiddleware(promiseMiddleware))