import {
  useCallback,
  useContext,
  useEffect
} from 'react'
import FetchContext from './../../../context/fetch'
import { useSelector, useDispatch } from 'react-redux'
import { initialSliceActions as indexInitialSliceActions } from './../../../redux/initial/initial'
import { fetchAction as indexQuotesSliceFetchAction } from './../../../redux/pages/quotes/quotes'



const Hook = props => {


  
  const fetchContext = useContext(FetchContext)
  
  
  
  const indexQuotesSlice = useSelector(store => store.quotes)

  const indexInitialSlice = useSelector(store => store.indexInitial)


  
  const dispatch = useDispatch()



  const indexQuotesSliceFetchActionOnFinish = useCallback(callbackProps => dispatch(indexInitialSliceActions.handler({
    tail: 'fetch.quotes.list',
    ...callbackProps
  })), [dispatch])



  useEffect(() => {

    !indexInitialSlice.fetch.quotes.list && dispatch(indexQuotesSliceFetchAction({
      handler: fetchContext.handler,
      dataTail: 'data',
      onFinish: indexQuotesSliceFetchActionOnFinish,
      actionName: 'set'
    }))

  }, [indexInitialSlice.fetch.quotes.list, dispatch, fetchContext.handler, indexQuotesSliceFetchActionOnFinish])


  return { list: indexQuotesSlice.list }



}



export default Hook