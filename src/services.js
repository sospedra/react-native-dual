import { Dimensions } from 'react-native'

export const BOUNCE_MARGIN = Dimensions.get('window').height / 3

/**
 * Merge the original prop with the lib enrichment
 * Take cares also of fallbacks and default values
 *
 * @param {Bool} [shouldEnrich=true]  - If the Dual component intaked the enrichment or not
 * @param  {Object} [prop={}]         - Original prop
 * @param  {Object} enrichment         - Dual enhancement
 * @return {Object}
 */
export const mergeProp = (shouldEnrich = true, prop = {}, enrichment) => {
  return shouldEnrich ? Object.assign({}, prop, enrichment) : prop
}

export const contentProps = (props, bottom, top) => ({
  contentContainerStyle: mergeProp(!!top, props.contentContainerStyle, { backgroundColor: top }),
  contentInset: mergeProp(props.contentInset, { top: -BOUNCE_MARGIN }),
  contentOffset: mergeProp(props.contentOffset, { top: -BOUNCE_MARGIN }),
  style: mergeProp(!!bottom, props.style, { backgroundColor: bottom })
})

export const innerStyle = {
  height: BOUNCE_MARGIN
}
