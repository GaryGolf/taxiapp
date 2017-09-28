import * as React from 'react'
import { View, Text} from 'react-native'

interface Props {}
interface State {}

export default class Main extends React.Component<Props, State>{
  render(){
    return (
      <View>
        <Text>Hello world</Text>
      </View>
    )
  }
}