import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import addArticle from '../../redux/actions/index'

class ConnectedForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  handleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { title } = this.state
    this.props.addArticle({ title })
    this.setState({ title: '' })
  }

  render () {
    const { title } = this.state
    const formConstants = {
      title: 'Titulo',
      save: 'GUARDAR'
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">{formConstants.title}</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">{formConstants.save}</button>
      </form>
    )
  }
}

ConnectedForm.propTypes = {
  addArticle: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm)

export default Form
