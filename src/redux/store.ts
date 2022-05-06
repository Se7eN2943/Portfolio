import { combineReducers, configureStore } from '@reduxjs/toolkit'

import aviaSalesReducer from './reducers/aviaSalesReducer'
import blogReducer from './reducers/blogReducer'


const rootReducer = combineReducers({
  aviaSalesReducer,
  blogReducer
})

const logger =
  (store: { getState: () => any }) =>
    (next: (arg: any) => any) =>
      (actions: any) => {
        const res = next(actions)
        console.log('AviaSales', store.getState().aviaSalesReducer)
        console.log('Blog', store.getState().blogReducer)
        return res
      }

const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [logger]
  })
}

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
