import classes from './Theme.module.css'

import { useDispatch } from 'react-redux'
import { uiSliceActions as indexUiSliceActions } from './../../../../redux/ui/ui'



const Theme = () => {



  const dispatch = useDispatch()



  const clickHandler = () => dispatch(indexUiSliceActions.themeHandler())
  
  
  return (

    <button
      className={ classes.theme }
      type='button'
      onClick={ clickHandler }
    ></button>

  )



}



export default Theme