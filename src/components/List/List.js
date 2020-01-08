import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
)

ConnectedList.propTypes = {
  articles: PropTypes.array
}

const mapStateToProps = state => {
  return { articles: state.articles }
}

const List = connect(mapStateToProps)(ConnectedList)

export default List
