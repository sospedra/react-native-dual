import React from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'

import { getListHeader, contentProps } from './services'

/**
 * A FlatList assigns the colors as follows:
 * - bottom is the FlatList's contentContainerStyle backgroundColor
 * - top is the FlatList's self backgroundColor
 *
 * The renderHeader is given the BOUNCE_MARGIN height to create the dual effect
 */
export default function DualFlatList ({ bottom, children, top, ...props }) {
  return (
    <FlatList
      {...props}
      {...contentProps(props, bottom, top)}
      ListHeaderComponent={getListHeader(props.ListHeaderComponent, top)}
    />
  )
}

DualFlatList.propTypes = {
  bottom: PropTypes.string,
  top: PropTypes.string.isRequired
}
