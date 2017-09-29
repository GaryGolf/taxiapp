import * as React from 'react'
import { View, StyleSheet} from 'react-native'

import SignIn from './sign-in'

interface Props {}
interface State {}

export default class Main extends React.Component<Props, State>{
  render(){
    return (
      <View style={styles.container}>
        <SignIn/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  }
})