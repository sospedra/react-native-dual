# react-native-dual
ScrollView, ListView and FlatList with dual background

### Usage

Instead of using normal React Native component favour the Dual one and share two
special props: `bottom` and `top` to set the colors you want to display.

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
