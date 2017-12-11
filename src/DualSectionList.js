import React from 'react'
import PropTypes from 'prop-types'
import { SectionList } from 'react-native'

import { getListHeader, contentProps } from './services'

/**
 * A SectionList assigns the colors as follows:
 * - bottom is the SectionList's contentContainerStyle backgroundColor
 * - top is the SectionList's self backgroundColor
 *
 * The renderHeader is given the BOUNCE_MARGIN height to create the dual effect
 */
export default function DualSectionList ({ bottom, children, top, ...props }) {
  return (
    <SectionList
      {...props}
      {...contentProps(props, bottom, top)}
      ListHeaderComponent={getListHeader(props.ListHeaderComponent, top)}
    />
  )
}

DualSectionList.propTypes = {
  bottom: PropTypes.string,
  top: PropTypes.string.isRequired
}
