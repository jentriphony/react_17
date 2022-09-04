// import { useSelector } from 'react-redux'
// import { Route, Redirect } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Quotes from './pages/Quotes/Quotes'
import Comments from './pages/Comments/Comments'



function App() {



  // const indexPagesUrlsSlice = useSelector(store => store.indexPagesUrls)
  
  
  return (

    <Layout>



      {/* <Route path='/' exact>
        <Redirect to={ indexPagesUrlsSlice.comments.url } />
      </Route> */}
      
      <Quotes />

      <Comments />



    </Layout>

  )



}

export default App
