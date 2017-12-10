import React from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'

import { innerStyle, contentProps } from './services'

/**
 * A FlatList assigns the colors as follows:
 * - bottom is the FlatList's contentContainerStyle backgroundColor
 * - top is the FlatList's self backgroundColor
 *
 * The renderHeader is given the BOUNCE_MARGIN height to create the dual effect
 */
export default function DualFlatList ({ bottom, children, top, ...props }) {
  const ListHeaderComponent = () => (
    <View>
      <View style={innerStyle(top)} />
      {props.ListHeaderComponent && <props.ListHeaderComponent />}
    </View>
  )

  return (
    <FlatList
      {...props}
      {...contentProps(props, bottom, top)}
      ListHeaderComponent={ListHeaderComponent}
    />
  )
}

DualFlatList.propTypes = {
  bottom: PropTypes.string,
  top: PropTypes.string.isRequired
}
