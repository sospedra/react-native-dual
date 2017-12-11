import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'

import { getBounceCorrection, contentProps } from './services'

/**
 * A ScrollView assigns the colors as follows:
 * - bottom is the ScrollView's contentContainerStyle backgroundColor
 * - top is the ScrollView's self backgroundColor
 *
 * The ScrollView contains an extra top-placed child with the BOUNCE_MARGIN
 * height to create the dual effect
 */
export default function DualScrollView ({ bottom, children, top, ...props }) {
  return (
    <ScrollView
      {...props}
      {...contentProps(props, bottom, top)}
    >
      {getBounceCorrection(top)}
      {children}
    </ScrollView>
  )
}

DualScrollView.propTypes = {
  bottom: PropTypes.string,
  top: PropTypes.string.isRequired
}
