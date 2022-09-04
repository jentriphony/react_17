import { createContext } from 'react'



const Context = createContext()
export const ContextProvider = props => {



  const handler = async handlerProps => {

    handlerProps.onStart && handlerProps.onStart()
    try {
      const response = await fetch(handlerProps.url, handlerProps.configuration)
      if(!response.ok) throw new Error('error_fetch')
      let data = await response.json()
      if(handlerProps.dataTail) {
        const dataTailArray = handlerProps.dataTail.split('.')
        for(let iterator = 0; iterator < dataTailArray.length; ++iterator)
          data = data[dataTailArray[iterator]]
      }
      handlerProps.onSuccess && handlerProps.onSuccess({
        props: handlerProps.onSuccessProps,
        data
      })
      handlerProps.onFinish && handlerProps.onFinish({
        props: handlerProps.onFinishProps,
        data
      })
      return data
    } catch(error) {
      handlerProps.onError && handlerProps.onError({
        props: handlerProps.onErrorProps,
        error: error.message
      })
      handlerProps.onFinish && handlerProps.onFinish({
        props: handlerProps.onFinishProps,
        error: error.message
      })
      return { error: error.message }
    }

  }


  return (

    <Context.Provider value={ { handler } }>



      { props.children }



    </Context.Provider>

  )



}



export default Context