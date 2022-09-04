import { createSlice } from '@reduxjs/toolkit'
import { uiSliceActions as indexUiSliceActions } from './../../ui/ui'
import indexFetchUrlsSlice from './../../fetch/urls'



const quotesSlice = createSlice({
  name: 'indexQuotes',
  initialState: { list: [] },
  reducers: {
    set: (slice, props) => {
      if(props.payload.data.error) return
      slice.list = props.payload.data
    },
    add: (slice, props) => {
      slice.list.push(props.payload.data.item)
    },
    ignore: () => {}
  }
})
export const fetchAction = props => {
  return async dispatch => {
    const onStart = () => {
      dispatch(indexUiSliceActions.layoutHeaderNotificationHandler({
        status: 'loading',
        message: 'fetch_quotes'
      }))
      props.onStart && props.onStart()
    }
    const onSuccess = onSuccessProps => {
      dispatch(indexUiSliceActions.layoutHeaderNotificationHandler({
        status: 'success',
        message: 'fetch_quotes'
      }))
      props.onSuccess && props.onSuccess(onSuccessProps)
    }
    const onError = onErrorProps => {
      dispatch(indexUiSliceActions.layoutHeaderNotificationHandler({
        status: 'error',
        message: `fetch_quotes ${ onErrorProps.error.message }`
      }))
      props.onError && props.onErrorProps(onErrorProps)
    }
    const data = await props.handler({
      onStart,
      url: indexFetchUrlsSlice.getInitialState().pages.quotes,
      configuration: props.configuration,
      dataTail: props.dataTail,
      onSuccess,
      onError,
      onFinish: props.onFinish
    })
    return dispatch(quotesSlice.actions[props.actionName]({
      props: props.actionProps,
      data
    }))
  }
}



export const quotesSliceReducer = quotesSlice.reducer
export const quotesSliceActions = quotesSlice.actions
export default quotesSlice