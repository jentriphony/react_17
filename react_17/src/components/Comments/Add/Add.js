import classes from './Add.module.css'

import {
  useState,
  useCallback,
  useContext,
  Fragment
} from 'react'
import FetchContext from './../../../context/fetch'
import { useDispatch } from 'react-redux'
import { fetchAction as indexCommentsSliceFetchAction } from './../../../redux/pages/comments/comments'
import Form from './Form/Form'



const Add = () => {



  const [formActive, setFormActive] = useState(null)



  const fetchContext = useContext(FetchContext)



  const dispatch = useDispatch()
  
  
  
  const formVisibilityHandler = () => setFormActive(previousState => !previousState)
  
  const addHandler = useCallback(callbackProps => {

    const itemId = `item_${ Math.floor(65536 * Math.random()) }`
    dispatch(indexCommentsSliceFetchAction({
      handler: fetchContext.handler,
      configuration: {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: {
          id: itemId,
          ...callbackProps
        }})
      },
      actionName: 'add'
    }))

  }, [dispatch, fetchContext.handler])
  
  
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
        <Form onSubmit={ addHandler } />
      ) }



    </Fragment>

  )



}



export default Add