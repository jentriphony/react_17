import { createSlice } from '@reduxjs/toolkit'



const urlsSlice = createSlice({
  name: 'indexPagesUrls',
  initialState: {
    comments: {
      name: 'comments',
      url: '/comments',
      children: {
        comment: {
          name: 'comment',
          url: '/comment',
          children: null
        }
      }
    },
    quotes: {
      name: 'quotes',
      url: '/quotes',
      children: {
        quote: {
          name: 'quote',
          url: '/quote',
          children: null
        }
      }
    }
  },
  reducers: {}
})



export const urlsSliceReducer = urlsSlice.reducer
export const urlsSliceActions = urlsSlice.actions
export default urlsSlice