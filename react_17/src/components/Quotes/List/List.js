import classes from './List.module.css'

import {
  useState,
  useContext,
  useEffect,
  Fragment
} from 'react'
import FullDomainUrlContext from './../../../context/full-domain-url'
import { useSelector } from 'react-redux'
import useInitialFetch from './../../../hooks/pages/quotes/initial-fetch'
import Item from './Item/Item'



const List = () => {



  const [itemUrl, setItemUrl] = useState(null)
  
  
  
  const fullDomainUrlContext = useContext(FullDomainUrlContext)
  
  
  
  const indexPagesUrlsSlice = useSelector(store => store.indexPagesUrls)



  const initialFetchHook = useInitialFetch()



  useEffect(() => {

    const fullDomainUrlContextHandlerResult = { url: null }
    fullDomainUrlContext.handler(
      { url: '/quote' },
      fullDomainUrlContextHandlerResult,
      indexPagesUrlsSlice.quotes,
      ''
    )
    setItemUrl(fullDomainUrlContextHandlerResult.url)

  }, [fullDomainUrlContext, indexPagesUrlsSlice.quotes])
  
  const listDOM = (
    <ul className={ classes.list }>
      { initialFetchHook.list.map(item => (
        <Item
          key={ item.id }
          item={ item }
          url={ `${ itemUrl }/${ item.id }` }
        />
      )) }
    </ul>
  )
  
  
  return (

    <Fragment>



      { initialFetchHook.list.length > 0 && listDOM }



    </Fragment>

  )



}



export default List