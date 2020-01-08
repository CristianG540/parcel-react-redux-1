import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
  articles: []
}

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    return {
      ...state,
      articles: state.articles.concat({ ...action.payload, id: state.articles.length + 1 })
    }
  }

  return state
}

export default rootReducer
