import classes from './Highlighted.module.css'



const Highlighted = props => {



  return (

    <figure className={ classes.highlighted }>



      <p>{ props.item.text }</p>

      <figcaption>{ props.item.author }</figcaption>



    </figure>

  )



}



export default Highlighted