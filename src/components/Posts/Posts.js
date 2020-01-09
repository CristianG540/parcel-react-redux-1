import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getData } from '../../redux/actions/index'

export class ConnectedPost extends Component {
  componentDidMount () {
    // calling the new action creator
    this.props.getData()
  }

  render () {
    return (
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    )
  }
}

ConnectedPost.propTypes = {
  articles: PropTypes.array,
  getData: PropTypes.func
}

const mapStateToProps = state => ({ articles: state.remoteArticles.slice(0, 10) })

const mapDispatchToProps = dispatch => ({ getData: () => dispatch(getData()) })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedPost)
