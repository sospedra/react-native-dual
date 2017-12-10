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
  const renderHeader = () => (
    <View>
      <View style={innerStyle} />
      {props.renderHeader && <props.renderHeader />}
    </View>
  )

  return (
    <FlatList
      {...props}
      {...contentProps(props, bottom, top)}
      renderHeader={renderHeader}
    />
  )
}

DualFlatList.propTypes = {
  bottom: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired
}
