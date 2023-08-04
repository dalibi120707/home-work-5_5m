import { legacy_createStore as createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { postsReducer } from "./postsReducer"

export const store = createStore(postsReducer, applyMiddleware(thunk))