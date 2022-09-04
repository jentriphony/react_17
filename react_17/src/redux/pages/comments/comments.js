import { createSlice } from '@reduxjs/toolkit'
import { uiSliceActions as indexUiSliceActions } from './../../ui/ui'
import indexFetchUrlsSlice from './../../fetch/urls'



const commentsSlice = createSlice({
  name: 'indexComments',
  initialState: {
    list: [],
    sortedList: []
  },
  reducers: {
    set: (slice, props) => {
      if(props.payload.data.error) return
      slice.list = props.payload.data
    },
    add: (slice, props) => {
      if(props.payload.data.error) return
      slice.list.push(props.payload.data.item)
    },
    sort: (slice, props) => {
      if(props.payload.status === null) {
        slice.sortedList = JSON.parse(JSON.stringify(slice.list))
        return
      }
      if(props.payload.status === true) {
        slice.sortedList.length === slice.list.length ? slice.sortedList.sort() : slice.sortedList = JSON.parse(JSON.stringify(slice.list)).sort()
        return
      }
      slice.sortedList.length === slice.list.length ? slice.sortedList.reverse() : slice.sortedList = JSON.parse(JSON.stringify(slice.list)).reverse()
    },
    ignore: () => {}
  }
})
export const fetchAction = props => {
  return async dispatch => {
    const onStart = () => {
      dispatch(indexUiSliceActions.layoutHeaderNotificationHandler({
        status: 'loading',
        message: 'fetch_comments'
      }))
      props.onStart && props.onStart()
    }
    const onSuccess = onSuccessProps => {
      dispatch(indexUiSliceActions.layoutHeaderNotificationHandler({
        status: 'success',
        message: 'fetch_comments'
      }))
      props.onSuccess && props.onSuccess(onSuccessProps)
    }
    const onError = onErrorProps => {
      dispatch(indexUiSliceActions.layoutHeaderNotificationHandler({
        status: 'error',
        message: `fetch_comments: ${ onErrorProps.error.message }`
      }))
      props.onError && props.onError(onErrorProps)
    }
    const data = await props.handler({
      onStart,
      url: indexFetchUrlsSlice.getInitialState().pages.comments,
      configuration: props.configuration,
      dataTail: props.dataTail,
      onSuccess,
      onError,
      onFinish: props.onFinish
    })
    return dispatch(commentsSlice.actions[props.actionName]({
      props: props.actionProps,
      data
    }))
  }
}



export const commentsSliceReducer = commentsSlice.reducer
export const commentsSliceActions = commentsSlice.actions
export default commentsSlice