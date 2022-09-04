import classes from './Error.module.css'



const Error = props => {



  return (

    <p className={ classes.error }>



      { props.message }



    </p>

  )



}



export default Error