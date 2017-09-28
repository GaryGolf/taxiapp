import * as React from 'react'
import { Provider, Store } from 'react-redux';
import store from './store'
import Main from './containers/main'

interface Props {}
interface State {}

export default class TaxiApp extends React.Component<Props,State>{
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    )
  }
}