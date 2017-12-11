import React from 'react'
import PropTypes from 'prop-types'
import { View, ListView } from 'react-native'

import { getListHeader, contentProps } from './services'

/**
 * A ListView assigns the colors as follows:
 * - bottom is the ListView's contentContainerStyle backgroundColor
 * - top is the ListView's self backgroundColor
 *
 * The renderHeader is given the BOUNCE_MARGIN height to create the dual effect
 */
export default function DualListView ({ bottom, children, top, ...props }) {
  return (
    <ListView
      {...props}
      {...contentProps(props, bottom, top)}
      renderHeader={getListHeader(props.renderHeader, top)}
    />
  )
}

DualListView.propTypes = {
  bottom: PropTypes.string,
  top: PropTypes.string.isRequired
}
