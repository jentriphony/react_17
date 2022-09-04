import classes from './Page.module.css'

import {
  useState,
  useEffect,
  Fragment
} from 'react'
import { useParams } from 'react-router-dom'
import useInitialFetch from './../../../../hooks/pages/comments/initial-fetch'
import NotFound from './../../../UI/NotFound'



const Page = () => {
  
  
  
  const [value, setValue] = useState(null)

  
  
  const routerParams = useParams()



  const initialFetchHook = useInitialFetch()



  useEffect(() => {

    initialFetchHook.list.length > 0 && setValue(initialFetchHook.list.find(item => item.id === routerParams.id) || 'item_not_found')

  }, [initialFetchHook.list, routerParams.id])
  
  
  return (

    <Fragment>



      { value && (
        <section className={ classes.comment }>
          { value && value !== 'item_not_found' && (
            <Fragment>
              <span>{ value.author }</span>

              <span>{ value.text }</span>
            </Fragment>
          ) }

          { value === 'item_not_found' && (
            <NotFound itemName='comment' />
          ) }
        </section>
      ) }



    </Fragment>

  )



}



export default Page