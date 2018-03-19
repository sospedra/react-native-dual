# react-native-dual

[![Build Status](https://travis-ci.org/sospedra/react-native-dual.svg?branch=master)](https://travis-ci.org/sospedra/react-native-dual)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/sospedra/react-native-dual.svg)]()
[![Code Climate](https://img.shields.io/codeclimate/c/sospedra/react-native-dual.svg)]()
[![David](https://img.shields.io/david/sospedra/react-native-dual.svg)]()
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

ScrollView, FlatList, SectionList, DualVirtualizedList and ListView with vertical dual background

### Check the demo ([live](https://expo.io/@sospedra/react-native-dual-demo) | [source](https://github.com/sospedra/react-native-dual-demo))

| Before (problem) | After (with dual)   |
|------------------|-------------------|
| ![no-dual](https://user-images.githubusercontent.com/3116899/33805424-f3b0875e-ddb8-11e7-8353-352c6bceee75.gif) | ![with-dual](https://user-images.githubusercontent.com/3116899/33805413-c0db71e0-ddb8-11e7-89d0-d1aebbaf7b3b.gif) |

### Usage

Instead of using normal React Native component favour the Dual one and share two
special props: **`bottom` and `top` to set the colors you want to display**.

```js
<DualScrollView
  bottom='cadetblue'
  top='rebeccapurple'
  keyboardShouldPersistTaps='always' // Use standard RN API also
>
  <Text>Mercury</Text>
  <Text>Venus</Text>
  <Text>Earth</Text>
</DualScrollView>
```

If you don't specify a `bottom` color will fallback to the component style
*(if you're already passing a style object there's no need for `bottom` extra prop)*:

```js
<DualScrollView
  top='rebeccapurple'
  keyboardShouldPersistTaps='always' // Use standard RN API also
  style={{ backgroundColor: 'lemonchiffon' }}
>
  <Text>Mars</Text>
  <Text>Jupiter</Text>
  <Text>Saturn</Text>
</DualScrollView>
```

### API

Exposed components are:

* DualFlatList
* DualListView (notice will be deprecated by React Native in the future)
* DualScrollView
* DualSectionList
* DualVirtualizedList

And all of them intakes both `top` and `bottom` props:

* `top: string`
* `bottom?: string`
