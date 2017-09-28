
import { createStore, applyMiddleware, Store, Middleware } from 'redux'
import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise-middleware'
import rootReducer, { RootState } from './reducers/index'
import { PRODUCTION } from './constants/env'

function configureStore(initialState?: RootState): Store<RootState> {
    const middleware: Middleware[] = [ReduxThunk, ReduxPromise() ]
    if(!PRODUCTION) middleware.push(createLogger({collapsed: true}))  
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState) as Store<RootState>
}

export default configureStore()