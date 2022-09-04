import classes from './Quotes.module.css'

import Add from './Add/Add'
import List from './List/List'



const Quotes = () => {



  return (

    <section className={ classes.quotes }>



      <h2>quotes</h2>
      
      <Add />

      <List />



    </section>

  )



}



export default Quotes