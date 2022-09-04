import classes from './Add.module.css'

import {
  useState,
  useCallback,
  useContext,
  Fragment
} from 'react'
import FetchContext from './../../../context/fetch'
import { useDispatch } from 'react-redux'
import { fetchAction as indexQuotesSliceFetchAction } from './../../../redux/pages/quotes/quotes'
import Form from './Form/Form'



const Add = () => {

  

  const [formActive, setFormActive] = useState(null)



  const formVisibilityHandler = useCallback(() => setFormActive(previousState => !previousState), [])



  const fetchContext = useContext(FetchContext)
  


  const dispatch = useDispatch()


    
  const handler = useCallback(callbackProps => dispatch(indexQuotesSliceFetchAction({
    handler: fetchContext.handler,
    configuration: {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: {
        id: `item_${ Math.floor(65536 * Math.random()) }`,
        ...callbackProps
      }})
    },
    actionName: 'add'
  })), [dispatch, fetchContext.handler])
  
  
  return (

    <Fragment>
    
    
    
      <button
        className='btn'
        type='button'
        onClick={ formVisibilityHandler }
      >
        { formActive ? 'cancel' : 'add' }
      </button>
      
      { formActive && (
        <Form onSubmit={ handler } />
      ) }



    </Fragment>

  )



}



export default Add