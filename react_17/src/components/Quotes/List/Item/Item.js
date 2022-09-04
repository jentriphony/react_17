import classes from './Item.module.css'

import {
  useState,
  useCallback,
  Fragment
} from 'react'
import { Link } from 'react-router-dom'
import Modal from './../../../UI/Modal'



const Item = props => {



  const [modalActive, setModalActive] = useState(null)



  const modalActivationHandler = useCallback(() => setModalActive(previousState => !previousState), [])
  
  return (

    <Fragment>


      
      <li className={ classes.item }>
        <figure>
          <blockquote>
            <Link to={ props.url }>
              { props.item.text.length > 64 ? `${ props.item.text.slice(0, 64) }...` : props.item.text }
            </Link>
          </blockquote>

          <figcaption>{ props.item.author.length > 64 ? `${ props.item.text.slice(0, 64) }...` : props.item.author }</figcaption>
        </figure>

        <button
          className='btn'
          type='button'
          onClick={ modalActivationHandler }
        >
          fullscreen
        </button>
      </li>

      { modalActive && (
        <Modal onClick={ modalActivationHandler }>
          <figure className={ classes['full-screen'] }>
            <blockquote>
              <Link to={ props.url }>
                { props.item.text.length > 64 ? `${ props.item.text.slice(0, 64) }...` : props.item.text }
              </Link>
            </blockquote>

            <figcaption>{ props.item.author.length > 64 ? `${ props.item.text.slice(0, 64) }...` : props.item.author }</figcaption>
          </figure>
        </Modal>
      ) }



    </Fragment>

  )



}



export default Item