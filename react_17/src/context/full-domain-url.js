import { createContext } from 'react'




const Context = createContext()
export const ContextProvider = props => {



  const handler = (
    targetUrl,
    result,
    currentUrl,
    currentPath
  ) => {

    if(result.url) return
    if(currentUrl.url === targetUrl.url) {
      result.url = currentPath + targetUrl.url
      return
    }
    if(!currentUrl.children) return
    for(const [, value] of Object.entries(currentUrl.children))
      handler(
        targetUrl,
        result,
        value,
        currentPath + currentUrl.url
      )

  }
  
  
  return (

    <Context.Provider value={ { handler } }>



      { props.children }



    </Context.Provider>

  )



}



export default Context