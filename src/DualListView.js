import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Dimensions } from 'react-native'

const BOUNCE_MARGIN = Dimensions.get('window').height / 3
const mergeProp = (prop, enrichment) => {
  return prop ? Object.assign({}, prop, enrichment) : enrichment
}

export default function DualScrollView ({ bottom, children, top, ...props }) {
  const contentContainerStyle = mergeProp(props.contentContainerStyle, { backgroundColor: top })
  const contentInset = mergeProp(props.contentInset, { top: -BOUNCE_MARGIN })
  const contentOffset = mergeProp(props.contentOffset, { top: -BOUNCE_MARGIN })
  const style = mergeProp(props.style, { backgroundColor: bottom })
  const renderHeader = () => (
    <View>
      <View style={{height: SPACER_SIZE}} />
      {props.renderHeader && <props.renderHeader />}
    </View>
  )

  return (
    <ListView
      {...props}
      contentContainerStyle={contentContainerStyle}
      contentInset={contentInset}
      contentOffset={contentOffset}
      renderHeader={renderHeader}
      style={style}
    />
  )
}

DualScrollView.propTypes = {
  bottom: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
}
