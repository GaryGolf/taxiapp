import * as React from 'react'
import { View, Text } from 'react-native'

interface Props {}
interface State {}

export default class HelloWorld extends React.Component<Props,State>{
  render(){
    return (
      <View>
        <Text> Hello World</Text>
      </View>
    )
  }
}