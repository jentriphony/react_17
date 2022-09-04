import classes from './Item.module.css'

import { Link } from 'react-router-dom'



const Item = props => {
  
  

  return (

    <li className={ classes.item }>



      <Link to={ `${ props.url }/${ props.item.id }` }>
        { props.item.text.length > 64 ? `${ props.item.text.slice(0, 64) }...` : props.item.text }
      </Link>



    </li>

  )



}



export default Item