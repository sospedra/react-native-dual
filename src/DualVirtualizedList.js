import React from 'react'
import PropTypes from 'prop-types'
import { View, VirtualizedList } from 'react-native'

import { getListHeader, contentProps } from './services'

/**
 * A VirtualizedList assigns the colors as follows:
 * - bottom is the VirtualizedList's contentContainerStyle backgroundColor
 * - top is the VirtualizedList's self backgroundColor
 *
 * The renderHeader is given the BOUNCE_MARGIN height to create the dual effect
 */
export default function DualVirtualizedList ({ bottom, children, top, ...props }) {
  return (
    <VirtualizedList
      {...props}
      {...contentProps(props, bottom, top)}
      ListHeaderComponent={getListHeader(props.ListHeaderComponent, top)}
    />
  )
}

DualVirtualizedList.propTypes = {
  bottom: PropTypes.string,
  top: PropTypes.string.isRequired
}
