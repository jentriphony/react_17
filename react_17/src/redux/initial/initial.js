import { createSlice } from '@reduxjs/toolkit'



const initialSlice = createSlice({
  name: 'indexInitial',
  initialState: {
    fetch: {
      comments: { list: null },
      quotes: { list: null }
    }
  },
  reducers: {
    handler: (slice, props) => {
      const tailArray = props.payload.tail.split('.')
      if(props.payload.error) {
        slice[tailArray[0]][tailArray[1]][tailArray[2]] = false
        return
      }
      slice[tailArray[0]][tailArray[1]][tailArray[2]] = true
    }
  }
})



export const initialSliceReducer = initialSlice.reducer
export const initialSliceActions = initialSlice.actions
export default initialSlice