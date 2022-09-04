import {
  useContext,
  useCallback,
  useEffect,
} from 'react'
import FetchContext from './../../../context/fetch'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAction as indexCommentsSliceFetchAction } from './../../../redux/pages/comments/comments'
import { initialSliceActions as indexInitialSliceActions } from './../../../redux/initial/initial'



const Hook = props => {



  const fetchContext = useContext(FetchContext)



  const indexCommentsSlice = useSelector(store => store.comments)

  const indexInitialSlice = useSelector(store => store.indexInitial)
  
  
  
  const dispatch = useDispatch()



  const indexCommentsSliceFetchActionOnFinish = useCallback(callbackProps => dispatch(indexInitialSliceActions.handler({
    tail: 'fetch.comments.list',
    ...callbackProps
  })), [dispatch])



  useEffect(() => {

    !indexInitialSlice.fetch.comments.list && dispatch(indexCommentsSliceFetchAction({
      handler: fetchContext.handler,
      dataTail: 'data',
      onFinish: indexCommentsSliceFetchActionOnFinish,
      actionName: 'set'
    }))

  }, [indexInitialSlice.fetch.comments.list, dispatch, fetchContext.handler, indexCommentsSliceFetchActionOnFinish])


  if(props && props.withSortedList)
    return {
      list: indexCommentsSlice.list,
      sortedList: indexCommentsSlice.sortedList
    }
  return { list: indexCommentsSlice.list }



}



export default Hook