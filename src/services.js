import React from 'react'
import { Dimensions, Platform, View } from 'react-native'

const IS_ANDROID = Platform.OS === 'android'
const BOUNCE_MARGIN = Dimensions.get('window').height / 2

/**
 * Merge the original prop with the lib enrichment
 * Take cares also of fallbacks and default values
 *
 * @param {Bool} [shouldEnrich=true]  - If the Dual component intaked the enrichment or not
 * @param  {Object} [prop={}]         - Original prop
 * @param  {Object} enrichment         - Dual enhancement
 * @return {Object}
 */
const mergeProp = (shouldEnrich = true, prop = {}, enrichment) => {
  return shouldEnrich ? Object.assign({}, prop, enrichment) : prop
}

/**
 * Apply needed props to create a space on the top of the scrollable element
 * with top color set. The idea is to add a View with the bounce height and the top
 * color. Then, start the scroll view at the end of this bounce corrector (inset).
 * And finally correct the initial scroll position (offset).
 *
 * @param  {Object} props
 * @param  {String} bottom
 * @param  {String} top
 * @return {Object}
 */
export const contentProps = (props, bottom, top) => ({
  contentContainerStyle: mergeProp(!!top, props.contentContainerStyle),
  contentInset: mergeProp(props.contentInset, { top: -BOUNCE_MARGIN }),
  contentOffset: mergeProp(props.contentOffset, { y: BOUNCE_MARGIN }),
  style: mergeProp(!!bottom, props.style, { backgroundColor: bottom })
})

/**
 * Create the element added at the top of the scrollable element.
 * With BOUNCE_MARGIN equal height and top color
 * Don't return anything if Android
 *
 * @param  {String} top
 * @return {React.Node?}
 */
export const getBounceCorrection = (top) => {
  return IS_ANDROID ? null : <View style={{
    backgroundColor: top,
    height: BOUNCE_MARGIN
  }} />
}

/**
 * Create the header component for all the scrollable React Native components.
 * Include the bounce corrector and the header (if any) send by the end user.
 * Just return the custom prop if Android
 *
 * @param  {React.Node|Function} ListHeader
 * @param  {string} top
 * @return {React.Node?}
 */
export const getListHeader = (ListHeader, top) => {
  if (IS_ANDROID && !ListHeader) return null
  if (IS_ANDROID && ListHeader) return ListHeader

  return () => (
    <View key='dual-list-header'>
      {getBounceCorrection(top)}
      {ListHeader && <ListHeader />}
    </View>
  )
}
