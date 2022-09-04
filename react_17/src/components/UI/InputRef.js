import classes from './InputRef.module.css'

import { forwardRef, useImperativeHandle } from 'react'
import hook from './../../hooks/input'
import Error from './Error'



const Input = forwardRef((props, ref) => {
  

  
  const hookData = hook({
    validationHandler: props.validationHandler,
    formActive: props.formActive
  })



  useImperativeHandle(ref, () => ({
    value: hookData.value,
    valid: hookData.valid,
    reset: hookData.reset
  }))

  
  
  return (

    <div className={ classes.input }>



      <label htmlFor={ props.labelHtmlFor }>
        { props.labelInnerText }
      </label>

      { props.input && (
        <input
          { ...props.input }
          value={ hookData.value }
          onBlur={ hookData.blurHandler }
          onInput={ hookData.inputHandler }
        />
      ) }

      { props.textarea && (
        <textarea
          { ...props.textarea }
          value={ hookData.value }
          onBlur={ hookData.blurHandler }
          onInput={ hookData.inputHandler }
        />
      ) }

      { hookData.showError && (
        <Error message='error_input' />
      ) }



    </div>

  )



})



export default Input