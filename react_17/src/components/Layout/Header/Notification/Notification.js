import classes from './Notification.module.css'

import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { uiSliceActions as indexUiSliceActions } from './../../../../redux/ui/ui'
import LoadingSpinner from './../../../UI/LoadingSpinner'




const Notification = () => {



  const indexUiSlice = useSelector(store => store.indexUi)
  
  
  
  const dispatch = useDispatch()



  const visibilityHandler = () => dispatch(indexUiSliceActions.layoutHeaderNotificationHandler({ visible: false }))
  
  
  return (

    <Fragment>



      { indexUiSlice.layoutHeaderNotification.visible && (
        <div className={ classes.notification } id='click-away-immune'>
          <button
            type='button'
            id='dropdown-button'
            onClick={ visibilityHandler }
          >
            x
          </button>

          <span>{ indexUiSlice.layoutHeaderNotification.message }</span>

          { indexUiSlice.layoutHeaderNotification.status === 'loading' && (
            <LoadingSpinner />
          ) }

          <span>{ indexUiSlice.layoutHeaderNotification.status }</span>
        </div>
      ) }
      


    </Fragment>

  )



}



export default Notification