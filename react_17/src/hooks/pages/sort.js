import {
  useState,
  useCallback,
  useEffect
} from 'react'
import { useDispatch } from 'react-redux'



const Hook = props => {



  const [status, setStatus] = useState(null)



  const dispatch = useDispatch()



  const statusHandler = useCallback(() => setStatus(previousState => {
    if(previousState === null) return true
    if(previousState === true) return false
    return null
  }), [])

  const handler = useCallback(callbackProps => dispatch(props.actions[props.actionName]({ status: callbackProps.status })), [dispatch, props.actions, props.actionName])



  useEffect(() => {

    handler({ status })

  }, [props.listLength, handler, status])


  return { statusHandler }



}



export default Hook