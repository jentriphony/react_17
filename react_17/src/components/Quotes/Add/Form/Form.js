import classes from './Form.module.css'

import {
  useState,
  useRef,
  useCallback
} from 'react'
import InputRef from './../../../UI/InputRef'



const Form = props => {



  const [active, setActive] = useState(null)
  
  
  
  const [
    authorRef,
    textRef
  ] = [
    useRef(),
    useRef()
  ]



  const authorValidationHandler = useCallback(handlerProps => handlerProps.value.trim() !== '', [])

  const textValidationHandler = useCallback(handlerProps => handlerProps.value.trim() !== '', [])

  const reset = () => (active && setActive(null)) || authorRef.current.reset() || textRef.current.reset()



  const submitHandler = event => {
    
    event.preventDefault()
    if(authorRef.current.valid && textRef.current.valid) {
      props.onSubmit({
        author: authorRef.current.value,
        text: textRef.current.value
      })
      reset()
      return
    }
    !active &&  setActive(true)

  }
  
  
  return (

      <form className={ classes.form } onSubmit={ submitHandler }>



        <div className={ classes.control }>
          <InputRef
            labelHtmlFor='quote_add_form_author'
            labelInnerText='author'
            input={ {
              type: 'text',
              id: 'quote_add_form_author'
            } }
            validationHandler={ authorValidationHandler }
            formActive={ active }
            ref={ authorRef }
          />
        </div>

        <div className={ classes.control }>
          <InputRef
            labelHtmlFor='quote_add_form_text'
            labelInnerText='text'
            textarea={ {
              id: 'quote_add_form_text',
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