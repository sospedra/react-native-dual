import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Dimensions } from 'react-native'

import { innerStyle, contentProps } from './services'

/**
 * A ListView assigns the colors as follows:
 * - bottom is the ListView's contentContainerStyle backgroundColor
 * - top is the ListView's self backgroundColor
 *
 * The renderHeader is given the BOUNCE_MARGIN height to create the dual effect
 *
 * @constructor
 */
export default function DualListView ({ bottom, children, top, ...props }) {
  const renderHeader = () => (
    <View>
      <View style={innerStyle} />
      {props.renderHeader && <props.renderHeader />}
    </View>
  )

  return (
    <ListView
      {...props}
      {...contentProps(props, bottom, top)}
    />
  )
}

DualListView.propTypes = {
  bottom: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
}
