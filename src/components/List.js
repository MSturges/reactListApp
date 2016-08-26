import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from './input'

class List extends Component {

  renderListItems() {
    console.log('CALLED RENDER LIST', this.props.list);
    return this.props.list.map((listItem) => {
      console.log('LIST ITEM', listItem);
      return (
        <li>
        {listItem}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
      <ul>
      {this.renderListItems()}
      </ul>
      <div>
      <Input />
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.list.list
  }
}

export default connect(mapStateToProps)(List)
