import { createSlice } from '@reduxjs/toolkit'



const uiSlice = createSlice({
  name: 'indexUi',
  initialState: {
    theme: 'dark',
    layoutHeaderNotification: {
      visible: null,
      status: null,
      message: null
    },
    clickAway: {}
  },
  reducers: {
    themeHandler: slice => {
      if(slice.theme === 'dark') {
        document.body.style.background = 'rgba(255, 255, 255, 0.8)'
        document.body.style.color = 'black'
        slice.theme = 'light'
        return
      }
      document.body.style.background = 'rgba(0, 0, 0, 0.8)'
      document.body.style.color = 'white'
      slice.theme = 'dark'
    },
    layoutHeaderNotificationHandler: (slice, props) => {
      if(props.payload.visible === false) {
        slice.layoutHeaderNotification.visible = false
        return
      }
      !slice.layoutHeaderNotification.visible && (slice.layoutHeaderNotification.visible = true)
      props.payload.status && (slice.layoutHeaderNotification.status = props.payload.status)
      props.payload.message && (slice.layoutHeaderNotification.message = props.payload.message)
    },
    clickAwayHandler: (slice, props) => {
      if(props.payload.unsubscribe) {
        delete slice.clickAway[props.payload.subscriberName]
        return
      }
      slice.clickAway[props.payload.subscriberName] = true
    }
  }
})



export const uiSliceReducer = uiSlice.reducer
export const uiSliceActions = uiSlice.actions
export default uiSlice