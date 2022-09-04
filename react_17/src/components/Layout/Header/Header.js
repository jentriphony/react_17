import classes from './Header.module.css'

import { Fragment } from 'react'
import Theme from './Theme/Theme'
import Navigation from './Navigation/Navigation'
import Notification from './Notification/Notification'



const Header = () => {



  return (

    <Fragment>


      
      <section className={ classes.header }>
        <Theme />

        <Navigation />
      </section>

      <Notification />



    </Fragment>

  )



}



export default Header