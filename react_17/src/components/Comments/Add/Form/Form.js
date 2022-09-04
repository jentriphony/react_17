import classes from './Form.module.css'

import {
  useState,
  useRef,
  useCallback
} from 'react'
import InputRef from './../../../UI/InputRef'



const Form = props => {



  const [active, setActive] = useState(null)
  
  
  
  const textRef = useRef()



  const textValidationHandler = useCallback(handlerProps => handlerProps.value.trim() !== '', [])



  const reset = () => textRef.current.reset() || (active && setActive(null))
  
  
  
  const submitHandler = event => {

    event.preventDefault()
    if(textRef.current.valid) {
      props.onSubmit({ text: textRef.current.value })
      reset()
      return
    }
    !active && setActive(true)

  }
  
  
  return (

    <form className={ classes.form } onSubmit={ submitHandler }>



      <div className={ classes.control }>
        <InputRef
          labelHtmlFor='comment-add-form-text'
          labelInnerText='text'
          textarea={ {
            id: 'comment-add-form-text',
            rows: '5'
          } }
          validationHandler={ textValidationHandler }
          formActive={ active }
          ref={ textRef }
        />
      </div>

      <div className={ classes.actions }>
        <button className='btn' type='submit'>
          add
        </button>
      </div>



    </form>

  )



}



export default Form