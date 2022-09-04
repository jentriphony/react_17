import {
  useState,
  useCallback,
  useEffect
} from 'react'



const Input = props => {



  const [value, setValue] = useState(props.value || '')

  const [active, setActive] = useState(props.active || null)

  const [valid, setValid] = useState(props.error || null)



  const blurHandler = useCallback(() => (!active && setActive(true)) || setValid(props.validationHandler({ value })), [active, props, value])

  const inputHandler = useCallback(event => {

    setValue(event.target.value);
    !valid && (active || props.formActive) && setValid(props.validationHandler({ value: event.target.value }))

  }, [valid, active, props])

  const reset = useCallback(() => (setActive(null) || setValue('')) || setValid(null), [])



  useEffect(() => {

    props.formActive && !active && setActive(true)

  }, [props.formActive, active])
  
  
  return {
    value,
    valid: props.validationHandler && props.validationHandler({ value }),
    showError: (active || props.formActive) && !valid,
    blurHandler,
    inputHandler,
    reset
  }



}



export default Input