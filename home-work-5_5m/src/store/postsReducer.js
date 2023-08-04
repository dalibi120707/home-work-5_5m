import axios from "axios";

const initialState = {
  posts: {
    
  },
  comments: {
    
  }
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.payload }
    case "SET_COMMENTS":
      return { ...state, comments: action.payload }
    default:
      return state
  }
}

export const fetchPosts = () => {
  return async (dispatch) => {
    const resp = await axios.get('https://dummyjson.com/posts?limit=10')
    dispatch({ type: 'SET_POSTS', payload: resp.data })
  }
}

export const fetchComments = (postId) => {
  return async (dispatch) => {
    const resp = await axios.get(`https://dummyjson.com/comments/post/${postId}`)
    dispatch({ type: 'SET_COMMENTS', payload: resp.data })
  }
}