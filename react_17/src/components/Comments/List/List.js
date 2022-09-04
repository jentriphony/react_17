import classes from './List.module.css'

import {
  useState,
  useContext,
  useEffect,
  Fragment
} from 'react'
import FullDomainUrlContext from './../../../context/full-domain-url'
import { useSelector } from 'react-redux'
import { commentsSliceActions as indexCommentsSliceActions } from './../../../redux/pages/comments/comments'
import useInitialFetch from './../../../hooks/pages/comments/initial-fetch'
import useSort from './../../../hooks/pages/sort'
import Item from './Item/Item'



const List = () => {



  const [itemUrl, setItemUrl] = useState(null)  
  

  
  const fullDomainUrlContext = useContext(FullDomainUrlContext)
  
  
  
  const indexPagesUrlsSlice = useSelector(store => store.indexPagesUrls)



  const initialFetchHook = useInitialFetch({ withSortedList: true })

  const sortHook = useSort({
    listLength: initialFetchHook.list.length,
    actions: indexCommentsSliceActions,
    actionName: 'sort'
  })



  useEffect(() => {

    const fullDomainUrlContextHandlerResult = { url: null }
    fullDomainUrlContext.handler(
      { url: '/comment' },
      fullDomainUrlContextHandlerResult,
      indexPagesUrlsSlice.comments,
      ''
    )
    setItemUrl(fullDomainUrlContextHandlerResult.url)

  }, [fullDomainUrlContext, indexPagesUrlsSlice.comments])

  const listDOM = (

    <ul className={ classes.list }>
      { initialFetchHook.sortedList.map(item => (
        <Item
          key={ item.id }
          item={ item }
          url={ itemUrl }
        />
      )) }
    </ul>

  )
  
  
  return (

    <Fragment>



      <button
        className={ classes['sort-button'] }
        type='button'
        onClick={ sortHook.statusHandler }
      >
        sort
      </button>

      { initialFetchHook.sortedList.length > 0 && listDOM }



    </Fragment>

  )



}



export default List