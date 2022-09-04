import classes from './Comments.module.css'

import Add from './Add/Add'
import List from './List/List'




const Comments = () => {
  

  
  return (
    
    <section className={ classes.comments }>



      <h2>comments</h2>

      <Add />

      <List />



    </section>

  )



}



export default Comments