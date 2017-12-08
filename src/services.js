import { Dimensions } from 'react-native'

export const BOUNCE_MARGIN = Dimensions.get('window').height / 3

export const mergeProp = (prop, enrichment) => {
  return prop ? Object.assign({}, prop, enrichment) : enrichment
}

export const contentProps = (props, botto, top) => ({
  contentContainerStyle: mergeProp(props.contentContainerStyle, { backgroundColor: top }),
  contentInset: mergeProp(props.contentInset, { top: -BOUNCE_MARGIN }),
  contentOffset: mergeProp(props.contentOffset, { top: -BOUNCE_MARGIN }),
  style: mergeProp(props.style, { backgroundColor: bottom })
})

export const innerStyle = {
  height: BOUNCE_MARGIN
}
