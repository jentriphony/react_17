import classes from './../css/Quotes/Quotes.module.css'

import { useContext, Fragment } from 'react'
import FullDomainUrlContext from './../../context/full-domain-url'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import Quotes from './../../components/Quotes/Quotes'
import Quote from './../../components/Quotes/List/Item/Page'



const Page = () => {



  const fullDomainUrlContext = useContext(FullDomainUrlContext)



  const indexPagesUrlsSlice = useSelector(store => store.indexPagesUrls)

  const quoteUrl = { url: null }
  fullDomainUrlContext.handler(
    { url: '/quote' },
    quoteUrl,
    indexPagesUrlsSlice.quotes,
    ''
  )
  
  
  return (

    <Fragment>



      <Route path={ indexPagesUrlsSlice.quotes.url } exact>
        <Quotes />
      </Route>

      <Route path={ `${ quoteUrl.url }/:id` }>
        <Quote />
      </Route>



    </Fragment>

  )



}



export default Page