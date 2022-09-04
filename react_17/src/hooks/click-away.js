import {
  useState,
  useCallback,
  useEffect
} from 'react'



const ClickAway = props => {



  const [visible, setVisible] = useState((props && props.visible) || null)
  

  
  const visibilityHandler = useCallback(() => setVisible(previousState => !previousState), [])

  const clickAwayHandler = useCallback(event => {

    if(!event.target.id.includes('dropdown-button')) {
      let tmp = event.target
      if(tmp.id && tmp.id.includes('click-away-immune')) return
      while(tmp.parentNode && tmp.parentNode.nodeName.toLowerCase() !== 'body') {
        tmp = tmp.parentNode
        if(tmp.id && tmp.id.includes('click-away-immune')) return
      }
      visibilityHandler()
      document.body.removeEventListener('click', clickAwayHandler)
    }

  }, [visibilityHandler])



  useEffect(() => {

    visible ? document.body.addEventListener('click', clickAwayHandler) : document.body.removeEventListener('click', clickAwayHandler)

  }, [visible, clickAwayHandler])


  return {
    visible,
    visibilityHandler
  }



}



export default ClickAway