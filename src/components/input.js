import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }

  submitItem(event) {
    event.preventDefault()
    this.props.addItem(this.state.inputValue);
    this.setState({
      inputValue: ''
    })
  }

  updateFormState(value) {
    this.setState({
      inputValue: value
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.submitItem(event)}>

      <input
      onChange={(event) => this.updateFormState(event.target.value)}
      value={this.state.inputValue}
      type="text"
      placeholder='Add Item'/>

      <input type="submit"/>
      </form>
    )
  }
}

export default connect(null, actions)(Input)
