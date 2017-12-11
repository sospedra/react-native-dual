/* global describe, expect, it */
import { ListView, Text, View } from 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import {
  DualFlatList,
  DualListView,
  DualScrollView,
  DualSectionList
} from '../src'

describe('react-native-dual suite', () => {
  const COLOR = '#3498db'

  it('should render DualFlatList with bouncer props', () => {
    const wrapper = renderer.create(<DualFlatList
      top='#2980b9'
      bottom={COLOR}
      data={Array(4).fill().map((x, key) => ({ key }))}
      renderItem={({item}) => <Text>{item.key}</Text>}
      keyExtractor={({ key }) => key}
    />).toJSON()

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.props.contentInset.top < 0).toBe(true)
    expect(wrapper.props.contentOffset.y > 0).toBe(true)
    expect(wrapper.props.style.backgroundColor).toBe(COLOR)
    expect(wrapper.props.ListHeaderComponent).toBeInstanceOf(Function)
  })

  it('should render DualListView with bouncer props', () => {
    class WrapperComponent extends React.Component {
      constructor () {
        super()

        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.state = {
          dataSource: ds.cloneWithRows(
            Array(4).fill().map((x, key) => `${key}`)
          )
        }
      }

      render () {
        return <DualListView top='#8e44ad' style={{ backgroundColor: COLOR }}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text key={rowData}>{rowData}</Text>}
        />
      }
    }

    const wrapper = renderer.create(<WrapperComponent />).toJSON()

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.props.contentInset.top < 0).toBe(true)
    expect(wrapper.props.contentOffset.y > 0).toBe(true)
    expect(wrapper.props.style.backgroundColor).toBe(COLOR)
    expect(wrapper.props.renderHeader).toBeInstanceOf(Function)
  })

  it('should render DualScrollView with bouncer props', () => {
    const wrapper = renderer.create(<DualScrollView top='#16a085' bottom={COLOR}>
      <View>
        <Text>Cool header</Text>
        <Text>With different background</Text>
      </View>
      {Array(21).fill().map((x, i) => (
        <Text key={i}>{`Item ${i}`}</Text>
      ))}
    </DualScrollView>).toJSON()

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.props.contentInset.top < 0).toBe(true)
    expect(wrapper.props.contentOffset.y > 0).toBe(true)
    expect(wrapper.props.style.backgroundColor).toBe(COLOR)
  })

  it('should render DualSectionList with bouncer props', () => {
    const wrapper = renderer.create(<DualSectionList top='#c0392b' bottom={COLOR}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section }) => <View>
        <Text>Section Header {section.title}</Text>
      </View>}
      sections={[
        {data: Array(7).fill().map((x, key) => key), title: 'A'},
        {data: Array(7).fill().map((x, key) => key), title: 'B'},
        {data: Array(7).fill().map((x, key) => key), title: 'C'}
      ]}
    />).toJSON()

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.props.contentInset.top < 0).toBe(true)
    expect(wrapper.props.contentOffset.y > 0).toBe(true)
    expect(wrapper.props.style.backgroundColor).toBe(COLOR)
    expect(wrapper.props.ListHeaderComponent).toBeInstanceOf(Function)
  })
})
