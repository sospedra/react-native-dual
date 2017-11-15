import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export default DualView ({ style, ...props }) {
  return <View style={[styles.dual, style]}>
    {props.children}
  </View>
}
