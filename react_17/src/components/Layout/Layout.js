import classes from './Layout.module.css'

import { Fragment } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'



const Layout = props => {



  return (

    <Fragment>



      <Header />

      <Main>{ props.children }</Main>



    </Fragment>

  )



}



export default Layout