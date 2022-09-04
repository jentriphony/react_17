import classes from './../css/Comments/Comments.module.css'

import { useContext, Fragment } from 'react'
import FullDomainUrlContext from './../../context/full-domain-url'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import Comments from './../../components/Comments/Comments'
import Comment from './../../components/Comments/List/Item/Page'



const Page = () => {



  const fullDomainUrlContext = useContext(FullDomainUrlContext)
  
  
  
  const indexPagesUrlsSlice = useSelector(store => store.indexPagesUrls)

  const commentUrl = { url: null }
  fullDomainUrlContext.handler(
    { url: '/comment' },
    commentUrl,
    indexPagesUrlsSlice.comments,
    ''
  )
  
  
  return (

    <Fragment>



      <Route path={ indexPagesUrlsSlice.comments.url } exact>
        <Comments />
      </Route>
      
      <Route path={ `${ commentUrl.url }/:id` }>
        <Comment />
      </Route>



    </Fragment>

  )



}



export default Page