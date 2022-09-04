import { createSlice } from '@reduxjs/toolkit'



const urlsSlice = createSlice({
  name: 'indexFetchUrls',
  initialState: {
    pages: {
      comments: 'http://localhost:8000/api/comments',
      quotes: 'http://localhost:8000/api/comments'
    }
  },
  reducers: {}
})
export const fetchAction = props => {
  return async dispatch => {}
}



export const urlsSliceReducer = urlsSlice.reducer
export const urlsSliceActions = urlsSlice.actions
export default urlsSlice