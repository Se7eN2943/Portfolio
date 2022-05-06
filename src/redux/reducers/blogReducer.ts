import { createSlice } from '@reduxjs/toolkit'

import { BlogState } from '../../types'

const initialState: BlogState = {
  articles: [],
  articlesCount: 0,
  article: JSON.parse(localStorage.getItem('article'))?.article || {},
  auth: localStorage.getItem('auth') || '',
  username: localStorage.getItem('username') || '',
  image: localStorage.getItem('image') || '',
  token: localStorage.getItem('token') || '',
  email: localStorage.getItem('email') || ''
}

export const blogSlice = createSlice({
  name: 'userInterests',
  initialState,
  reducers: {
    ARTICLES(state, { payload }) {
      (state.articles = payload.articles),
        (state.articlesCount = payload.articlesCount)
    },
    ARTICLE(state, { payload }) {
      state.article = payload.article
    },
    LOGOUT(state) {
      (state.auth = false),
        (state.image = ''),
        (state.email = ''),
        (state.username = ''),
        (state.token = '')
    },
    SIGNIN(state, { payload }) {
      (state.auth = true),
        (state.email = payload.email),
        (state.username = payload.username),
        (state.token = payload.token)
    },
    SETIMG(state, { payload }) {
      state.image = payload
    }
  }
})

export default blogSlice.reducer
export const { ARTICLES, ARTICLE, LOGOUT, SIGNIN, SETIMG } = blogSlice.actions
