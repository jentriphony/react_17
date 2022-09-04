import classes from './NotFound.module.css'



const NotFound = props => {



  return (

    <p className={ classes['not-found'] }>



      { `${ props.itemName } not found` }



    </p>

  )


  
}



export default NotFound